import { createContext } from "react"

export const WebSocketContext = createContext({
    websocket: null as WebSocket | null
})