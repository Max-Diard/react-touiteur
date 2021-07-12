import React from 'react';
import {sendTouit} from '../api/TouitAPI';

class SendMessageForm extends React.Component{
	constructor(props){
		super(props);
		this.state = { 
			'nameValue' : "",
			'messageValue' : ""
		}
	}

	launchTouit = (ev) =>{
		ev.preventDefault();
		sendTouit(
			this.state.nameValue, 
			this.state.messageValue,
			() => {
				this.setState({
					'messageValue' : ""
				});
				alert("C'est envoyé");
			},
			msg =>{
				alert('Erreur Mec ' + msg);
			}
		)
	}

    render(){
		const {nameValue, messageValue} = this.state;
        return(
            <section className="form-touiteur">
			<div className="container">
				<form 
					action="" 
					method="get" 
					className="formulaire" 
					onSubmit = {(ev) => this.launchTouit(ev)}
				>
					<div className="container-formulaire">
						<div className="group-form name-form">
							<label htmlFor="get-name">Nom</label>
							<input
								id="get-name"
								className="area-tittle"
								type="text"
								name="nameValue"
								min = "3"
								maxLength = "16"
								placeholder="16 caractères Maximum"
								required
								value = {nameValue}
								onChange = {ev => this.setState({'nameValue': ev.target.value})}
								/>
						</div>
						<div className="group-form">
							<label htmlFor="get-message">Message</label>
							<input
								id = "get-message"
								className = "area-tittle"
								type = "text"
								name = "messageValue"
								maxLength = "256"
								placeholder = "256 caractères Maximum"
								required
								value = {messageValue}
								onChange = {ev => this.setState({'messageValue': ev.target.value})}
							/>
						</div>
						<div className="area-button">
							<input
								type = "submit"
								className = "button"
								value = "Envoyer"
							/>
						</div>
					</div>
				</form>
			</div>
		</section>
        );
    }

}

export default SendMessageForm;