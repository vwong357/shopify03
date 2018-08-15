import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

require('./sass/styles.scss')


import Gallery from './gallery.js'
import News from './news.js'

const data = [
    {key: 1, source:"./images/1.jpeg"},
    {key: 2, source:"./images/2.jpeg"},
    {key: 3, source:"./images/3.jpeg"},
    {key: 4, source:"./images/4.jpeg"},
    {key: 5, source:"./images/5.jpeg"},
    {key: 6, source:"./images/6.jpeg"},
    {key: 7, source:"./images/7.jpeg"},
    {key: 8, source:"./images/8.jpeg"},
    {key: 9, source:"./images/9.jpeg"},
]


const articles = [
    {key: 1, title: "a1",body:"./images/1.jpeg"},
    {key: 2, title: "a2",body:"./images/2.jpeg"},
    {key: 3, title: "a3",body:"./images/3.jpeg"},
    {key: 4, title: "a4",body:"./images/4.jpeg"},
    {key: 5, title: "a5",body:"./images/5.jpeg"},
    {key: 6, title: "a6",body:"./images/6.jpeg"},
    {key: 7, title: "a7",body:"./images/7.jpeg"},
    {key: 8, title: "a8",body:"./images/8.jpeg"},
    {key: 9, title: "a9",body:"./images/9.jpeg"},
]


class App extends React.Component{

    constructor(props){
        super(props)
        this.props = {news: {}}
    }
    updateImages(){
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
    });

    }

    render(){
        
        this.updateImages();

        return(
            <div>
               <h1>rendering list.....</h1>
            </div>
        )
    }
}

export default App
