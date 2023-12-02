import Footer from "./Footer"
import Header from "./Header"
import dndPicture from '../../static/dnd-picture.jpg'

const AboutPage = () => {

    return (
        <div className="h-full flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center">
                <div style={{ 
                    backgroundImage: `url(${dndPicture})` 
                }} className={`w-full h-96 bg-cover bg-center`}></div>

                <div className=" w-full max-w-lg flex flex-col px-3 py-3 items-center ">
                    <h2 className="text-xl">About us</h2>
                    <p className="mt-2 mb-10">
                        Dungeons and Dragons is rapidly becoming the most popular tabletop
                        role-playing game in America. With incredibly high production DnD
                        podcasts and tv shows becoming more and more common, peoples' standards
                        are becoming higher. Sound effects and awesome music elevate the
                        experience ten-fold. You and all your friends need a way to have a
                        shared soundboard you can pull up on your phone to use during all of
                        your DnD sessions.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default AboutPage