import React from "react";
import { GamesInfoType } from "~/types";

type Props = {
  games: GamesInfoType[];
};

const GamesPage: React.VFC<Props> = (props) => {
  return (
    <div>
      <div>{JSON.stringify(props)}</div>
    </div>
  );
};

export default GamesPage;
