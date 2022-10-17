import './App.css';
import React, { Component } from 'react'
import pic from './hatgirl.jpg'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person:{
        fullName: "Elkotel Rabeb",
        bio: "bio ",        
        profession: "Dentist",
        imgsrc:<img src={pic} alt='IMG' width={300}></img> ,     

      },        
      show: false,
      
    
    }; 
  }
  handleClick = () => {
    this.setState({show: !this.state.show,
    });
  };
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  render() {
    return (
      <div>
        {this.state.show ?
                <div>
                <h1>{this.state.person.fullName}</h1> 
                <h1>{this.state.person.bio}</h1>        
                <h1>{this.state.person.profession}</h1>
                <h1>{this.state.person.imgsrc}</h1>
                </div>
        : null}

        <button  onClick={this.handleClick} >
        {this.state.show ? "hide profile" : " show profile "}
        </button>
      
      </div> 
    )
 
  }
  
}

