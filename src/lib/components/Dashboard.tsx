import { useContext, useEffect, useRef, useState } from "react"
import { Board, IconOption } from "../interfaces"
import { UserContext } from "./UserContext"
import BoardCard from "./BoardCard"
import { addSoundBoard, getSoundBoards } from "../db/db-accessors"
import { v4 as uuid } from 'uuid'

const Dashboard = () => {
    const { user, reloadUser } = useContext(UserContext)
    const createBoardModalRef = useRef<HTMLDialogElement>(null)
    const [newBoardTitle, setNewBoardTitle] = useState<string>("")
    const [newBoardIcon, setNewBoardIcon] = useState<IconOption>("fa-wand-sparkles")

    const handleTitleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => setNewBoardTitle(e.target.value)

    const onChangeIconValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewBoardIcon(e.target.value as IconOption)
        console.log(e.target.value)
    }

    const handleCreateBoard = async () => {
        if (!user) return
        try {
            const newBoard = {
                id: uuid(),
                title: newBoardTitle,
                icon: newBoardIcon,
                sounds: []
            }
            await addSoundBoard(user.username, newBoard)
            reloadUser()
        } catch(error) {
            console.error(error)
        }
    }

    return user ? (
        <>
            <main className="flex-1 flex flex-col items-center h-full">
                <div className="w-full max-w-lg flex flex-col px-3">
                    <h1 
                        className="font-display text-3xl font-light my-8 self-center"
                    >My Soundboards</h1>
                    <button className="self-end" onClick={() => createBoardModalRef.current?.showModal()}>Create a new soundboard</button>
                    <hr className="mb-6" />

                    <div id="board-container" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        { user.boards.map(board => <BoardCard key={board.id} board={board} />) }
                    </div>

                </div>
            </main>

            <dialog className="border border-black shadow-md" ref={createBoardModalRef}>
                <div className="flex flex-col items-center p-4">

                    <h1 className="mt-3 mb-10 mx-8 text-3xl">Create a soundboard</h1>
                    <input onChange={handleTitleChangeValue} value={newBoardTitle} placeholder="Title" className="w-full px-3 mb-4 border" />
                    <h2 className="text-lg mb-3">Icon:</h2>
                    <div onChange={onChangeIconValue} className="grid grid-cols-4 gap-4 mb-8">
                        <div>
                            <input type="radio" id="wand-icon" name="icon" value="fa-wand-sparkles" />
                            <label htmlFor="wand-icon"><i className="fa-solid fa-wand-sparkles fa-lg"></i></label>
                        </div>
                        <div>
                            <input type="radio" id="dove-icon" name="icon" value="fa-dove" />
                            <label htmlFor="dove-icon"><i className="fa-solid fa-dove fa-lg"></i></label>
                        </div>
                        <div>
                            <input type="radio" id="shield-icon" name="icon" value="fa-shield" />
                            <label htmlFor="shield-icon"><i className="fa-solid fa-shield fa-lg"></i></label>
                        </div>
                        <div>
                            <input type="radio" id="leaf-icon" name="icon" value="fa-leaf" />
                            <label htmlFor="leaf-icon"><i className="fa-solid fa-leaf fa-lg"></i></label>
                        </div>
                        <div>
                            <input type="radio" id="fist-icon" name="icon" value="fa-hand-fist" />
                            <label htmlFor="fist-icon"><i className="fa-solid fa-hand-fist fa-lg"></i></label>
                        </div>
                        <div>
                            <input type="radio" id="person-icon" name="icon" value="fa-person" />
                            <label htmlFor="person-icon"><i className="fa-solid fa-person fa-lg"></i></label>
                        </div>
                        <div>
                            <input type="radio" id="house-icon" name="icon" value="fa-house" />
                            <label htmlFor="house-icon"><i className="fa-solid fa-house fa-lg"></i></label>
                        </div>
                        <div>
                            <input type="radio" id="dog-icon" name="icon" value="fa-dog" />
                            <label htmlFor="dog-icon"><i className="fa-solid fa-dog fa-lg"></i></label>
                        </div>
                    </div>

                    <div className="flex justify-around w-full">
                        <button onClick={handleCreateBoard} className="px-3 border hover:shadow-md">Create</button>
                        <button onClick={() => createBoardModalRef.current?.close()}>Close</button>
                    </div>
                </div>
            </dialog>
        </>
    ) : (
        <div className="flex-1 flex flex-col items-center">
            <h1 className="font-display text-3xl font-light my-8">My Soundboards</h1>
            <p className="text-lg">You must be logged in to view this page.</p>
        </div>
    )
}

export default Dashboard