import React from 'react'
import PictureFrame from './picture-frame';

class Gallery extends React.Component{
    constructor(props){
        super(props)
       
    }

render(){
    let gallery
    if(this.props.data ==null)
        gallery = "<h2>loading....</h2>"
    else
        gallery = this.props.data.map((item) =><PictureFrame source={item.source}/>)
    
        return(
            <span>{gallery}</span>
            
        )
    
    }
}
export default Gallery

{/* <ul>{this.props.data.map((item)=><li key={item.key}>{item.address}</li>)}</ul> */}