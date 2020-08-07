import React, {FunctionComponent} from "react";
// import classnames from " classnames";
import ServerBar from "../../components/ServerBar";
import ChannelBar from "../../components/ChannelBar";
import styles from "./index.module.scss";

const MainPage: FunctionComponent = () => {
  return <div className={styles["main-page-container"]}>
    <ServerBar />
    <ChannelBar />
  </div>
}

export default MainPage;