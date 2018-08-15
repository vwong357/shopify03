import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

require('./sass/styles.scss')

import axios from 'axios'
import Gallery from './gallery.js'

class App extends React.Component {
    
    
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true, newsData: {}};
  
      // This binding is necessary to make `this` work in the callback
      
        this.updateImages = this.updateImages.bind(this)
        
    }
  
    updateImages(){

    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e8d4f416eec24c1786da23c43797750d')
    .then((response)=>this.setState({news:response}))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      
    });

    }
componentWillMount(){
    this.updateImages()
}
   
    render() {
       let response
        if(this.state.news ==null){
            response = "loading..."
        }
        else{
            console.log(this.state.news)
            response = this.state.news.data.articles.map((item)=><a src={item.urlToImage}></a>)
        }
      return (
            <h1>{response}</h1>
      )
    }
  }

export default App
