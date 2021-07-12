import React from "react";
import "./Base.css";
import "./App.css";
import Header from "./components/Hearder";
import SendMessage from "./components/SendMessageForm";
import TouitContainer from "./components/TouitContainer";
import Trending from "./components/Trending";
import Influenceurs from "./components/Influenceurs";

/*
    1) Est-ce que ma variable doit être défini par le composant parent ? Oui -> props
    2) Sinon, est-ce que ma variable à un impact direct ou indirect sur le rendu ? Oui -> state
    3) Sinon, si c'est aucun de ces 2 cas -> propriété classique
*/

class App extends React.Component {
  render(){
		return (
			<div className="App">
				<Header />
				<SendMessage />
				<section className="message-touiteur">
					<div>
						<Influenceurs />
						<Trending />
					</div>
				<TouitContainer />
				</section>
			</div>
		);
	}
}

export default App;


