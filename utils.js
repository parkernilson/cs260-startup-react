const { v4: uuid } = require('uuid')

function getDefaultUserInfo() {
    return {
        boards: [
            {
                id: uuid(),
                title: "Nature Sounds",
                icon: "fa-dove",
                sounds: [
                    {
                        id: uuid(),
                        name: "Ambient Piano",
                        filename: "ambient-piano.mp3",
                        url: "https://storyteller-sounds.s3.us-east-1.amazonaws.com/ambient-piano.mp3",
                        color: "#7df088"
                    },
                    {
                        id: uuid(),
                        name: "Fire Winds",
                        filename: "fire-winds-swoosh.mp3",
                        url: "https://storyteller-sounds.s3.us-east-1.amazonaws.com/fire-winds-swoosh.mp3",
                        color: "#cf7df0"
                    },
                    {
                        id: uuid(),
                        name: "Tropical Sounds",
                        filename: "nature-sounds-tropical.mp3",
                        url: "https://storyteller-sounds.s3.us-east-1.amazonaws.com/nature-sounds-tropical.mp3",
                        color: "#f0c47d"
                    },
                    {
                        id: uuid(),
                        name: "Beach",
                        filename: "sandy-beach-calm.mp3",
                        url: "https://storyteller-sounds.s3.us-east-1.amazonaws.com/sandy-beach-calm.mp3",
                        color: "#f0807d"
                    }
                ],
            },
            {
                id: uuid(),
                title: "Battle Noises",
                icon: "fa-shield",
                sounds: [
                    {
                        id: uuid(),
                        name: "Ambient Piano",
                        filename: "ambient-piano.mp3",
                        url: "https://storyteller-sounds.s3.us-east-1.amazonaws.com/ambient-piano.mp3",
                        color: "#7df088"
                    },
                    {
                        id: uuid(),
                        name: "Fire Winds",
                        filename: "fire-winds-swoosh.mp3",
                        url: "https://storyteller-sounds.s3.us-east-1.amazonaws.com/fire-winds-swoosh.mp3",
                        color: "#cf7df0"
                    },
                    {
                        id: uuid(),
                        name: "Tropical Sounds",
                        filename: "nature-sounds-tropical.mp3",
                        url: "https://storyteller-sounds.s3.us-east-1.amazonaws.com/nature-sounds-tropical.mp3",
                        color: "#f0c47d"
                    },
                    {
                        id: uuid(),
                        name: "Beach",
                        filename: "sandy-beach-calm.mp3",
                        url: "https://storyteller-sounds.s3.us-east-1.amazonaws.com/sandy-beach-calm.mp3",
                        color: "#f0807d"
                    }
                ],
            },
            {
                id: uuid(),
                title: "Magic",
                icon: "fa-wand-sparkles",
                sounds: [
                    {
                        id: uuid(),
                        name: "Ambient Piano",
                        filename: "ambient-piano.mp3",
                        url: "https://storyteller-sounds.s3.us-east-1.amazonaws.com/ambient-piano.mp3",
                        color: "#7df088"
                    },
                    {
                        id: uuid(),
                        name: "Fire Winds",
                        filename: "fire-winds-swoosh.mp3",
                        url: "https://storyteller-sounds.s3.us-east-1.amazonaws.com/fire-winds-swoosh.mp3",
                        color: "#cf7df0"
                    },
                    {
                        id: uuid(),
                        name: "Tropical Sounds",
                        filename: "nature-sounds-tropical.mp3",
                        url: "https://storyteller-sounds.s3.us-east-1.amazonaws.com/nature-sounds-tropical.mp3",
                        color: "#f0c47d"
                    },
                    {
                        id: uuid(),
                        name: "Beach",
                        filename: "sandy-beach-calm.mp3",
                        url: "https://storyteller-sounds.s3.us-east-1.amazonaws.com/sandy-beach-calm.mp3",
                        color: "#f0807d"
                    }
                ],
            }
        ]
    }
}

module.exports = {
    getDefaultUserInfo
}