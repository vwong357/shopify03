import React, {Component} from 'react'
import NewsItem from './news'

import axios from 'axios'

import Gallery from './gallery.js'


var news = null;

function printAgain(){
    console.log(news.data.articles.map((article)=>article.urlToImage))
}

    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e8d4f416eec24c1786da23c43797750d')
    .then(function (response) {
      // handle success
      console.log(response);
      news = response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      printAgain();
    });



  
class News extends React.Component{

    constructor(props){
        super(props)
        this.state = {data: {}}
        this.links ="";
    }
   
    


    renderItems(){

       

        return(
            <div>
                <h1>rendering....</h1>
                
               
               <h2></h2>
                {/* <Gallery data={news.data.articles.map((article)=>article.urlToImage)}/> */}
                
            </div>
        )
    }


    render(){
        return(
            <div>
                 <h1>news component</h1>
                     {this.renderItems()}
            </div>
        )
       
    }
}

export default News