import { useContext, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "./UserContext"
import SoundCard from "./SoundCard"
import { uploadFile } from "../file-upload"
import { v4 as uuid } from "uuid"
import { addSoundToBoard } from "../db/db-accessors"

const Soundboard = () => {
    const { soundboardId } = useParams()
    const addSoundModalRef = useRef<HTMLDialogElement>(null)
    const { user, reloadUser } = useContext(UserContext)
    const board = user?.boards.find(board => board.id === soundboardId)
    const [newSoundFile, setNewSoundFile] = useState<File | null>(null)
    const [newSoundName, setNewSoundName] = useState<string>("")
    const [newSoundColor, setNewSoundColor] = useState<string>("")

    const handleAddSound = async () => {
        if (!user || !board || !newSoundFile) return
        try {
            const key = `${user.username}-${uuid()}`
            await uploadFile(newSoundFile, key)
            await addSoundToBoard(user.username, board.id, {
                id: key,
                name: newSoundName,
                filename: newSoundFile.name,
                color: newSoundColor,
                url: `https://storyteller-sounds.s3.us-east-1.amazonaws.com/${key}`
            })
            await reloadUser()
        } catch(error) {
            console.error(error)
        }
    }

    return user && board ? (
        <>
        <main className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-lg flex flex-col px-3">
                <div id="sound-board-header" className="flex items-center self-center">
                    <i className="fa-solid fa-dove fa-xl mr-2"></i>
                    <h1 className=" font-display text-3xl font-light my-8 self-center ">{board.title}</h1>
                </div>
                <button className="self-end" onClick={() => addSoundModalRef.current?.showModal()}>Add new sound</button>
                <hr className="mb-6"/>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {board.sounds.map(sound => <SoundCard key={sound.id} sound={sound} board={board} />)}
                </div>
            </div>
        </main>

        <dialog ref={addSoundModalRef}>
            <div className="flex flex-col items-center p-4">
                <h1 className="mt-3 mb-10 mx-8 text-3xl">Add a sound</h1>
                <input onChange={(e) => setNewSoundName(e.target.value)} placeholder="Name" className="w-full px-3 mb-4 border" />
                <label htmlFor="sound-file">Sound File</label>
                <input onChange={(e) => setNewSoundFile(e.target.files ? e.target.files[0] : null)} name="sound-file" type="file" className="mb-3" ></input>
                <label htmlFor="sound-color">Color</label>
                <input onChange={(e) => setNewSoundColor(e.target.value)} name="sound-color" type="color" className="mb-8"></input>
        
                <div className="flex justify-around w-full">
                    <button onClick={handleAddSound} className="px-3 border hover:shadow-md">Add</button>
                    <button onClick={() => addSoundModalRef.current?.close()}>Close</button>
                </div>
            </div>
        </dialog>
        </>
    ) : (
        <p>The user and board info could not be loaded</p>
    )
}

export default Soundboard