export type GamesInfoType = {
    "startTime": string
    "endTime": string
    "handycap": string
    "id": string
    "status": string
    "sente": string
    "gote": string
}

export const instanceOfGamesInfo = (arg: any): arg is GamesInfoType => 
    "startTime" in arg &&
    "endTime" in arg &&
    "handycap" in arg &&
    "id" in arg &&
    "status" in arg &&
    "sente" in arg &&
    "gote" in arg
