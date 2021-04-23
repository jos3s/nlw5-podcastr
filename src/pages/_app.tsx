import {useState} from "react";

import { Header } from "../components/Header";
import { Player } from "../components/Player";

import "../styles/global.scss";
import styles from "../styles/app.module.scss"
import { PlayerContextProvider } from "../contexts/PlayerContext";

export default function MyApp({ Component, pageProps }) {
  return (
		<PlayerContextProvider>
			<div className={styles.wrapper}>
				<main>
					<Header />
					<Component {...pageProps} />
				</main>
				<Player />
			</div>
		</PlayerContextProvider>
  );
};