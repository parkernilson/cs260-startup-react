import { useCallback, useContext, useEffect, useRef, useState } from "react"
import { removeSoundFromBoard } from "../db/db-accessors"
import { Board, Sound } from "../interfaces"
import { UserContext } from "./UserContext"
import { WebSocketContext } from "./WebSocketContext"
import { PauseSoundEvent, PlaySoundEvent, WebSocketEvent } from "../interfaces/websocket"

const SoundCard = ({ board, sound }: { board: Board, sound: Sound }) => {
    const { user, reloadUser } = useContext(UserContext)
    const [soundPlaying, setSoundPlaying] = useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement>(null)
    const { websocket } = useContext(WebSocketContext)

    const tryPlay = useCallback(async (broadcast: boolean) => {
        if (!audioRef.current) return
        if (audioRef.current.paused && !soundPlaying) {
            if (broadcast === true) {
                websocket?.send(JSON.stringify({
                    type: "play_sound",
                    soundId: sound.id
                } as PlaySoundEvent))
            }
            return await audioRef.current.play()
        }
    }, [audioRef, sound, soundPlaying, websocket])

    const tryPause = useCallback((broadcast: boolean) => {
        if (!audioRef.current) return
        if (!audioRef.current.paused && soundPlaying) {
            if (broadcast === true) {
                websocket?.send(JSON.stringify({
                    type: "pause_sound",
                    soundId: sound.id
                } as PauseSoundEvent))
            }
            return audioRef.current.pause()
        }
    }, [audioRef, sound, soundPlaying, websocket])

    const handleInboundWebsocketEvent = useCallback(async (e: MessageEvent) => {
        try {
            const eventData = await e.data.text()
            const message = JSON.parse(eventData)
            if (message.type === WebSocketEvent.PLAY_SOUND) {
                if (message.soundId !== sound.id) return
                tryPlay(false)
            } else if (message.type === WebSocketEvent.PAUSE_SOUND) {
                if (message.soundId !== sound.id) return
                tryPause(false)
            }
        } catch(error) {
            console.error(error)
            return
        }
    }, [sound, tryPlay, tryPause])

    useEffect(() => {
        websocket?.addEventListener("message", handleInboundWebsocketEvent)
    }, [websocket, handleInboundWebsocketEvent])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.onplaying = () => {
                setSoundPlaying(true)
            }

            audioRef.current.onpause = () => {
                setSoundPlaying(false)
            }
        }
    }, [audioRef])

    const handleRemove = async () => {
        if (!user) return
        try {
            await removeSoundFromBoard(user?.username, board.id, sound.id)
            await reloadUser()
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <div style={{
            backgroundColor: sound.color
        }} className={`border border-black shadow-md rounded-sm flex flex-col items-center cursor-pointer w-full h-full aspect-square p-3 ${sound.color} bg-[${sound.color}]`}>
            <h2 className="text-xl text-center">{sound.name ?? sound.filename ?? sound.url ?? "Untitled"}</h2>
            <p className="text-sm text-gray-400"></p>
            <audio ref={audioRef}>
                <source src={sound.url} />
            </audio>
            <div className="flex-1 flex flex-col justify-center items-center">
                <i onClick={() => tryPlay(true)} className="fa-solid fa-play" hidden={soundPlaying}></i>
                <i onClick={() => tryPause(true)} className="fa-solid fa-pause" hidden={!soundPlaying}></i>
            </div>
            <p>Tap to play sound</p>
            <div className="flex w-full justify-center items-center">
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    )
}

export default SoundCard