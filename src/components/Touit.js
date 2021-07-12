import React from 'react';
import { refreshLike, sendDislike, sendLike } from '../api/TouitAPI';
import Comments from './Comments';


class Touit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            'isGroupComment' : false,
            'like' : this.props.likes,
            'comment' : this.props.comment
        }
    }

    refresh = () =>{
        this.newDataLike = (response) =>{
            this.setState({
                'like' : response.likes, 
                'comment' : response.comments_count
            })
        }
        refreshLike(this.props.id, this.newDataLike)
    }

    clickLike = () => {
        sendLike(
            this.props.id,
            () => {
                alert("Like envoyé")
            },
            (msg) => {
                alert("Like pas envoyé" + msg)
            }
        )
    }

    clickDislike = () => {
        if (this.state.like > 0){
            sendDislike(
                this.props.id,
                () => {
                    // alert("Disklike envoyé")
                },
                (msg) => {
                    alert("Disklike pas envoyé" + msg)
                }
            )
        }
        else{
            alert('Tu ne peux pas Dislike un Touit à 0, même si des glandus ont liké en valeur négative')
        }
    }

    clickComment= () => {
        this.setState({
            'isGroupComment' : !this.state.isGroupComment
        })
    }
    
    render(){
        const {name, message, id} = this.props;
        const {isGroupComment} = this.state;

        return(
            <div className="bloc-message" onMouseOver={() => this.refresh()}>
                <div className="message-group">
                    <h2 className="message-title">{name}</h2>
                    <p className="message-text">{message}</p>
                    <div className="btn-group">
                        <button className="btn-like" onClick={this.clickLike}>{this.state.like}</button>
                        <button className="btn-dislike" onClick={this.clickDislike} ></button>
                        <button className="btn-comment" onClick={this.clickComment}>{this.state.comment}</button>
                    </div>
                    <div className="group-comments">
                        {isGroupComment && <Comments id={id}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Touit;



