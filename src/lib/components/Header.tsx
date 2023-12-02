import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center text-4xl bg-blue-100 h-24 px-8">
                <h1 className="font-display">Storyteller</h1>
                <nav>
                    <menu className="flex justify-between flex-wrap text-lg">
                        <li className="mx-2"><Link to="/">Log in</Link></li>
                        <span className="w-0 border-l border-gray-400"></span>
                        <li className="mx-2"><Link to="/soundboards">Soundboards</Link></li>
                        <span className="w-0 border-l border-gray-400"></span>
                        <li className="mx-2"><Link to="/about">About</Link></li>
                    </menu>
                </nav>
            </header>
            <hr />
        </>
    )
}

export default Header