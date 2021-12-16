import { collection, getDocs } from "firebase/firestore";
import { db } from "../../libs/firebase";
import { GamesInfoType, instanceOfGamesInfo } from "../../types";

export const fetchGames = async (): Promise<GamesInfoType[]> => {
  const querySnapShot = await getDocs(collection(db, "games"));
  const games: GamesInfoType[] = [];

  querySnapShot.forEach((doc) => {
    // console.log(doc.data())
    const data = doc.data();
    if (data?.startTime) {
      data.startTime = data.startTime.toDate().toJSON();
    }
    if (data?.endTime) {
      data.endTime = data.endTime.toDate().toJSON();
    }
    if (data?.sente) {
      data.sente = ""; // 参照型のデータ取得が必要
    }
    if (data?.gote) {
      data.gote = ""; // 参照型のデータ取得が必要
    }
    if (instanceOfGamesInfo(data)) games.push(data);
  });

  return games;
};
