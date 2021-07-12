import React from 'react';
import Touit from './Touit';
import {showTouit} from '../api/TouitAPI';


class TouitContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            'data' : []
        };
        this.lastTimeStamp = 0;
        this.intervalID = false;
    }

    refresh = () =>{
        showTouit(this.lastTimeStamp, response => {
            if (response.messages.length > 0){
                this.setState({
                    'data' : [...this.state.data, ...response.messages]
                });
            }
            this.lastTimeStamp = response.ts;
        })
    }

    componentDidMount(){
        this.intervalID = setInterval(this.refresh, 1000);
    }

    componentWillUnmount(){
        if (this.intervalID !== false){
            clearInterval(this.intervalID);
        }
    }

    render(){
        const {data} = this.state;
        return(
            <div className="container-touit">
                {
				    data
                    .sort((a, b) => b.ts - a.ts)
                    .map(t => <Touit key={t.id} 
                        name={t.name} 
                        message={t.message} 
                        comment={t.comments_count} 
                        likes={t.likes}
                        id={t.id}/>)
                }
			</div>
        )
    }
}

export default TouitContainer;