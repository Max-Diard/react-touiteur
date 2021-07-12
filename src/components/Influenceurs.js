import React from 'react';
import {showInfluenceurs} from '../api/TouitAPI';

class Influenceurs extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                'influenceurs': ''
            };
        }

        componentDidMount() {
            const recupData = (response) => {
                this.setState({
                    'influenceurs': response
                });
            };
            showInfluenceurs(recupData);
        }

        render() {
            return (
                <aside className="influenceurs">
                    <h2>Le top 5 des influenceurs</h2>
                    <div className="bloc-influenceurs">
                        <ul>
                            {
                                Object.entries(this.state.influenceurs)
                                .sort((a, b) => b[1].messages - a[1].messages)
                                .map((t, i) => (
                                    <li key={i}>
                                        <span className="important-word">{t[0]}</span>{' avec ' + t[1].messages + " Touits"}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </aside>
            );
        }
    }

export default Influenceurs;