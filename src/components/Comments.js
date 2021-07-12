import React from 'react';
import SendCommentForm from './SendCommentForm';
import { showComments } from '../api/TouitAPI'

class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            'dataComments' : false,
            'dataAsComment' : false
        }
        this.intervalID = false
    }

    refresh = () =>{
        this.recupComments = (response) => {
            if (response.length > 0){
                this.setState({
                    'dataComments' : response,
                    'dataAsComment': !this.state.dataAsComment
                })
            }
        }
        showComments(this.props.id, this.recupComments);
    }

    componentDidMount(){
        this.intervalID = setInterval(this.refresh, 500);
    }

    componentWillUnmount(){
        if (this.intervalID !== false){
            clearInterval(this.intervalID);
        }
    }


    render(){
        const {id} = this.props;
        return(
            <div className="group-comments">
                    {
                        this.state.dataComments ? 
                        this.state.dataComments.map((a,i) => 
                            <div className="all-comments-group" key={i}>
                                <h3 className="comments-title">{a.name}</h3>
                                <p className="comments-text">{a.comment}</p> 
                            </div>
                        )
                        :
                        <div className = "content-loader">
                            <div className="loader"></div>
                        </div>
                    }
                    <SendCommentForm id={id}/>

            </div>
        )
    }
}

export default Comments;