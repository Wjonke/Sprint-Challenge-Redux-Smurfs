import React, { Component } from 'react';
import { getSmurfs, addSmurf } from'../actions/index';
import { connect } from 'react-redux';

import './App.css';



/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */




class App extends Component {
  
  state = {
    smurf: {
      name: '',
      age: '',
      height: '',
    }
  };


  //HANDLERS--------------------------------------//
  handleSubmit = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.smurf);
  };

  handleChange = event => {
    event.persist();
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [event.target.name]: event.target.value
      }
    }))
}
  
  
  //CDM--------------------------------------------//
  componentDidMount () {
    this.props.getSmurfs()
  };


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to the Redux version of Smurfs!</div>
        <div>May I never see another Smurf again</div>

        {this.props.smurfs.map(smurf => (
          <div id={smurf.id} key={smurf.id}>
            <h2>{smurf.name}</h2>
            <p>{smurf.age} Smurf Years Old</p>
            <p>{smurf.height}  Tall</p>
          </div>
        ))}

        <form onSubmit = {this.handleSubmit}>

          <input
            type= 'text'
            name= 'name'
            placeholder= 'Enter Name'
            value= {this.state.name}
            onChange= {this.handleChange}
          />

          <input
            type= 'text'
            name= 'age'
            placeholder= 'Enter Age'
            value= {this.state.age}
            onChange= {this.handleChange}
          />

          <input
            type= 'text'
            name= 'height'
            placeholder= 'Enter Height'
            value= {this.state.height}
            onChange= {this.handleChange}
          />

          <button>Add a Smurf!</button>

        </form>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect (
  mapStateToProps,
  { getSmurfs, addSmurf }
) (App);
