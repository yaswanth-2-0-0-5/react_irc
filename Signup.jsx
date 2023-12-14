import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Signup extends Component {


  render() {
    return (
        
      <div className="box">
        <form>
          <nav>
        <h2><b>Sign Up</b></h2>

          </nav>
            <h1><marquee>PHARMACY MANAGEMENT SYSTEM</marquee></h1>
        <br></br>
            <label><b>First Name :   </b></label>
            <input type="text" placeholder="FirstName"required></input><br></br><br></br>
            <label><b>Last Name :   </b></label>
            <input type="text" placeholder="LastName"required></input><br></br><br></br>
            <label><b>Date of Birth    :   </b></label>
            <input type="date" placeholder="D.O.B"required></input><br></br><br></br>
            <label><b>Email    :   </b></label>
            <input type="email" placeholder="Email"required></input><br></br><br></br>
            <label><b>Phone Number :   </b></label>
            <input type="number" placeholder="Phone Number"required></input><br></br><br></br>
            <label><b>Gender :     </b></label>
            <input type="radio"></input>
            <label>Male</label>
            <input type="radio"></input>
            <label>Female</label>
            <input type="radio"></input>
            <label>Others</label><br></br><br></br>
            <label><b>Create Password:  </b>
          <input type="password"required placeholder="password" id="password"></input>
          </label>
          <br></br>  
          <br></br>
          <label><b>Confirm Password:  </b>
          <input type="password"required placeholder="confirm password" id="password"></input>
          </label>
          <br></br>  
          <br></br>
            <b><button><Link to="/">Submit</Link></button></b>
        </form>
      </div>
    );
  }
}
