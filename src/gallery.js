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
    else{
        gallery =  "hehe"
    }
        return(
           
           <ul>
              {gallery}
           </ul>
            
        )
    
    }
}
export default Gallery

{/* <ul>{this.props.data.map((item)=><li key={item.key}>{item.address}</li>)}</ul> */}