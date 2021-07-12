import React from 'react';
import {sendComment} from '../api/TouitAPI'

class SendCommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "nameValue" : "",
            "commentValue" : ""
        }
    }
   
    sendComment = ev => {
        ev.preventDefault();
        sendComment(
            this.props.id,
			this.state.nameValue, 
			this.state.commentValue,
			() => {
				this.setState({
                    'nameValue' : "",
					'commentValue' : ""
				});
				alert("C'est envoyé");
			},
			msg =>{
				alert('Erreur Mec ' + msg);
			}
		);
    }

    render(){
        const {nameValue, commentValue} = this.state;
        return(
            <form className="comments-form" onSubmit={ev => this.sendComment(ev)}>
                <label htmlFor="get-name">Nom</label>
                <input 
                    className="comments-form-title"
                    id="get-name"
                    type="text"
                    name="nameValue"
                    min = "3"
                    maxLength = "16"
                    placeholder="16 caractères Maximum"
                    required
                    value = {nameValue}
                    onChange = {ev => this.setState({'nameValue': ev.target.value})}
                />
                <label htmlFor="get-message">Message</label>
                <input 
                    className="comments-form-message"
                    id = "get-message"
                    type = "text"
                    name = "ommentValue"
                    maxLength = "256"
                    placeholder = "256 caractères Maximum"
                    required
                    value = {commentValue}
                    onChange = {ev => this.setState({'commentValue': ev.target.value})}
                />
                <input className="comments-form-button" type="submit"/>
            </form>
        )
    }
}


export default SendCommentForm;