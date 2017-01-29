import React from 'react';
/*import logo from './logo.svg';
/*import './App.css';*/

/*class App extends Component {
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
   const Footer =() => <p> Reactjs </p>*/

  /* class App extends React.Component{
        render(){
           return <Sample iphone="six"/>
           }
     }

     const Sample =(props)=><h1>{props.iphone}</h1>

     Sample.propTypes={
        iphone(props,propName,Component){
        if(!(propName in props)){
          return new Error(`Missing ${propName}`)
          }
          if((props[propName].length)<6){
            return new Error(`${propName} is too short`)
            }
        }
     }

export default App;*/
//state component

 class App extends React.Component {
 	constructor(){
 		super()
 		this.state ={
 			val:0
 		}
 	}
    update(){
 		this.setState({val:this.state.val+1})
 	}
	render(){
 		console.log("render")
 		return (
 			<div>
 				<button onClick={this.update.bind(this)}>{this.state.val}</button>
 			</div>
 		)
 	}
 }
 export default App;




