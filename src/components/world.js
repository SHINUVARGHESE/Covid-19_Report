import React, { Component } from "react";
import axios from "axios";

class World extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
    };
  }

  componentDidMount() {
    axios.get("https://corona.lmao.ninja/v2/countries").then((response) => {
      this.setState({ Data:response.data });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <td>Country</td>
                <td>Total Cases</td>
                <td>Recovered</td>
                <td>Deths</td>
              </tr>
            </thead>
            <tbody>
                {
                    this.state.Data.map((item,ky)=>{
                        return(
                            <tr>
                                <td>{item.country} <img style={{width:'64px', marginLeft:'10px'}} src={item.countryInfo.flag}/></td>
                                <td>{item.cases}</td>
                                <td>{item.recovered}</td>
                                <td>{item.deths}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default World;
