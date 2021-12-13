import { collection, getDocs } from "firebase/firestore";
import { db } from "../../libs/firebase";
import { GamesInfoType, instanceOfGamesInfo } from "../../types";

export const fetchGames = async ():Promise<GamesInfoType[]> => {
    const querySnapShot = await getDocs(collection(db, "games"));
    const games:GamesInfoType[] = []; 

    querySnapShot.forEach((doc) => {
        const data = doc.data()
        if(instanceOfGamesInfo(data)) games.push(data);
    });
    
    return games
}
