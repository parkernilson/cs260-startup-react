import { useParams } from "react-router-dom"

const Soundboard = () => {
    const { soundboardId } = useParams()

    return (
        <div>
            <h1>Soundboard {soundboardId}</h1>
        </div>
    )
}

export default Soundboard