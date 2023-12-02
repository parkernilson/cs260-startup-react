export const enum WebSocketEvent {
    PLAY_SOUND = "play_sound",
    PAUSE_SOUND = "pause_sound",
}

export type PlaySoundEvent = {
    type: WebSocketEvent.PLAY_SOUND,
    soundId: string,
}

export type PauseSoundEvent = {
    type: WebSocketEvent.PAUSE_SOUND,
    soundId: string,
}