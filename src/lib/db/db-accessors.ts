import { Board, Sound } from "../interfaces"

export function getCurrentUser() {
    const username = localStorage.getItem('currentUser')
    if (username === null) throw new Error("User was not logged in")
    else return username
}

/**
 * Get all of the sound boards that the user owns
 * @returns {Promise<Board[]>} 
 */
export async function getSoundBoards(username: string) {
    return fetch(`/api/${username}/boards`, { method: "GET" })
        .then(response => response.json())
        .then(data => data.boards)
}

export async function addSoundBoard(username: string, board: Board) {
    return fetch(`/api/${username}/boards/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ board })
    })
        .then(response => response.json())
        .then(data => data.board)
}

/**
 * @returns {Promise<Board[]>}
 */
export async function setSoundBoards(username: string, boards: Board[]) {
    return fetch(`/api/${username}/boards/set`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ boards })
    })
    .then(response => response.json())
    .then(data => data.boards)
}

/**
 * @returns {Promise<void>}
 */
export async function deleteSoundBoard(username: string, boardId: string) {
    return fetch(`/api/${username}/boards/${boardId}`, {
        method: "DELETE",
    })
}

/**
 * @returns {Promise<Sound[]>}
 */
export async function setSoundsOnBoard(username: string, boardId: string, sounds: Sound[]) {
    return fetch(`/api/${username}/boards/${boardId}/sounds/set`, {
        method: "POST",
        body: JSON.stringify({ sounds })
    })
    .then(response => response.json())
    .then(data => data.sounds)
}

/**
 * @returns {Promise<Sound>}
 */
export async function addSoundToBoard(username: string, boardId: string, sound: Sound) {
    return fetch(`/api/${username}/boards/${boardId}/sounds/add`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ sound })
    })
    .then(response => response.json())
    .then(data => data.sound)
}

/**
 * @returns {Promise<Board>}
 */
export async function getSoundboard(username: string, boardId: string) {
    return fetch(`/api/${username}/boards/${boardId}`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => data.board)
}

/**
 * @returns {Promise<void>}
 */
export async function removeSoundFromBoard(boardId: string, soundId: string) {
    const username = getCurrentUser()
    return fetch(`/api/${username}/boards/${boardId}/sounds/${soundId}`, {
        method: "DELETE"
    })
}
