import { doc, getDoc } from "firebase/firestore";
import { db } from "../../libs/firebase";
import { GamesInfoType, instanceOfGamesInfo } from "../../types";

export const fetchGameDetail = async (id: string): Promise<GamesInfoType | undefined> => {
  const docSnap = await getDoc(doc(db, "games", id));
  const data = docSnap.data();

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
  if (instanceOfGamesInfo(data)) {
    return data;
  }
};
