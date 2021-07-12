import React from "react";
import { showTrending } from "../api/TouitAPI";

class Trending extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		const recupData = (response) => {
			this.setState({
				data: response
			});
		};
		showTrending(recupData);
	}

	render() {
		const {data} = this.state;
		let newData = Object.keys(data).map(function (cle) {
			return [String(cle), data[cle]];
		});
		return (
			<aside className="trending">
				<h2>Les mots en tendance</h2>
				<div className="bloc-trending">
					<ul>
						{newData
							.sort((a, b) => b[1] - a[1])
							.map((t, i) => (
								<li key={i}>
									<span className="important-word">{t[0]}</span>{ ' avec ' + t[1] + " mots"}
								</li>
							))}
					</ul>
				</div>
			</aside>
		);
	}
}

export default Trending;
