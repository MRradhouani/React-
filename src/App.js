import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Inpute } from 'reactstrap';
class App extends Component {
  render() {
    return (
      <Form className="App">
        <h1>my site </h1>
        <FormGroup>
          <div>
            <label for="name">Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="name"></input>
          </div>
          <div>
            <label>prenom:</label>
            <input type="text" placeholder="prenom"></input>
          </div>

          <div>
            <label>email :</label>&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="email"></input>
          </div>

          <div>
            <label>Comment :</label>
            <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="say something"></textarea>
          </div>

        </FormGroup>
        <div>
          <button className="btn-lg btn-dark btn-block" type="reset" class="btnr">Reset</button>
          &nbsp;&nbsp; <button type="submit" class="btnr">submit</button>

        </div>


      </Form>
    );
  }
}


export default App;
