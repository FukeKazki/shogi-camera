export type GamesInfoType = {
    "startTime": string
    "endTime": string
    "handicap": string
    "id": string
    "status": string
    "sente": string
    "gote": string
}

export const instanceOfGamesInfo = (arg: any): arg is GamesInfoType => 
    "startTime" in arg &&
    "endTime" in arg &&
    "handicap" in arg &&
    "id" in arg &&
    "status" in arg &&
    "sente" in arg &&
    "gote" in arg
