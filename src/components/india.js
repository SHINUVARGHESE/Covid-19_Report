import React, { Component } from "react";
import { Card } from "react-bootstrap";
import {StateData} from './stateData.js';
import axios from 'axios';

class India extends Component {

    constructor(){
        super();
        this.state={
            Data:[]
        }
    }

    componentDidMount(){
        axios.get('https://corona.lmao.ninja/v2/countries/india').then(response=>{
            this.setState({Data:response.data})
        })
    }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="https://www.countryflags.io/in/shiny/64.png" alt="txt"/>
          <h3>INDIA</h3>
        </div>
        <div className="col-md-12">
          <div className="row text-center"> 
            <div className="col-md-3 pt-3">
              <Card
                className="badge badge-info"
                style={{
                  width: "18rem",
                  backgroundColor: "skyblue",
                  color: "light",
                }}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>TOTAL CASES</Card.Title>
                  <h3>{this.state.Data.cases}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 pt-3">
              <Card
                className="badge badge-info"
                style={{
                  width: "18rem",
                  backgroundColor: "goldenrod",
                  color: "light",
                }}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>ACTIVE CASES</Card.Title>
                  <h3>{this.state.Data.active}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 pt-3">
              <Card
                className="badge badge-info"
                style={{
                  width: "18rem",
                  backgroundColor: "limegreen",
                  color: "light",
                }}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>RECOVERED</Card.Title>
                  <h3>{this.state.Data.recovered}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 pt-3">
              <Card
                className="badge badge-info"
                style={{
                  width: "18rem",
                  backgroundColor: "lightsalmon",
                  color: "light",
                }}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>DEATHS</Card.Title>
                  <h3>{this.state.Data.deaths}</h3>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <StateData />
        </div>
      </div>
    );
  }
}

export default India;
