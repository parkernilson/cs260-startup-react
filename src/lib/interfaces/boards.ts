export type IconOption = "fa-wand-sparkles" | "fa-dove" | "fa-shield" | "fa-leaf" | "fa-fist" | "fa-person" | "fa-house" | "fa-dog"

export type Sound = {
    id: string
    name: string
    filename: string
    url: string
    color: string
}

export type Board = {
    id: string
    title: string
    icon: IconOption
    sounds: Sound[]
}