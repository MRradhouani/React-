import { Button, Form, FormGroup, Label, Inpute } from 'reactstrap';
import React, { Component } from 'react';
// import './App.css';  
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1> Radhouani Mohaned</h1>
        </div>
        <div className="container">
          <div className="jumbotron">
            {/* <h1> Todo app</h1> */}
            <form>
              <h1 className="initialism">My Form </h1>
              <FormGroup>
                <div>
                  <label for="name">Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="form-control" type="text" placeholder="name"></input>
            
                </div>

                <div>
                  <label >prenom:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="form-control" type="text" placeholder="prenom"></input>
                </div>

                <div>
                  <label>email :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="form-control" type="text" placeholder="email"></input>
                </div>

                <div>
                  <label>Comment :</label>
                  <textarea className="form-control" rows="4" cols="50" name="comment" form="usrform" placeholder="say something"></textarea>
                </div>
              </FormGroup>
              <div>
                <button type="submit" className="btn btn-primary">submit</button>
                &nbsp;&nbsp;<button className="btn btn-danger" type="reset" >Reset</button>


              </div>
            </form>
          </div>
        </div>
      </div>


    );
  }
}


export default App;
