import React from 'react'

class Navigation extends React.Component{
    render(){
        return(
        <nav>
            <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
          </ul> 
          </nav>
        )
    }
}

export default Navigation