import { useContext } from "react"
import { deleteSoundBoard } from "../db/db-accessors"
import { Board } from "../interfaces"
import { UserContext } from "./UserContext"
import { Link } from "react-router-dom"

const BoardCard = ({ board }: { board: Board }) => {

    const { user, reloadUser } = useContext(UserContext)

    const handleDelete = async () => {
        if (!user) return
        try {
            await deleteSoundBoard(user?.username, board.id)
            reloadUser()
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <div className="border border-black shadow-md rounded-sm flex">
            <Link className="flex-1 flex items-center h-full p-5 cursor-pointer" to={`/soundboards/${board.id}`}>
                <i className={`${board.icon} fa-solid fa-2xl mr-3`}></i>
                <div className="flex flex-col items-start">
                    <h2 className="font-display text-xl">{board.title}</h2>
                    <p>{board.sounds.length} sounds</p>
                </div>
            </Link>
            <div className="flex items-end pr-3 pb-3">
                <button onClick={handleDelete} className="hover:text-blue-400">Delete</button>
            </div>
        </div>
    )
}

export default BoardCard