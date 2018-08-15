import React from  'react'

class PictureFrame extends React.Component{
     
    //props: address
    constructor(props){
        super(props)
    //look into default props
    }
    render(){
        return(
            // <h1>
            //    <span onMouseOver= {this.handleOver} onMouseLeave={this.handleOver} 
            //    className={'picture-frame'}>Picture Frame
            //    <img src={this.props.address} key={ths.props.key}/>
            //    </span>
            //    </h1>
            
            <img className="picture-frame" src={this.props.source}/>
        )
    }
}

export default PictureFrame