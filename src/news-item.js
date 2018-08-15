import React, {Component} from 'react'

export class NewsItem extends React.Compoent{
    
    constructor(props){
        super(props)
    }
    render(){
        return(
            <li>
                id: {this.props.id}
                title: {this.props.title}
                body: {this.props.body}
            </li>
        )
    }

}

