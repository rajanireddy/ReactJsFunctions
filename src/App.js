import React, { Component } from 'react';
/*import logo from './logo.svg';
/*import './App.css';*/

class App extends Component {
  render() {
    return (
     <div>
         <Header/>
         <Body/>
         <Footer/>
     </div>
      )
    }
 }
   const Header =() => <img src="http://www.w3schools.com/css/trolltunga.jpg" alt="nature"/>
   const Body =() => <h1> Hello World </h1>
   const Footer =() => <p> Reactjs </p>

export default App;
