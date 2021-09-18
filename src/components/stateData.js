import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import axios from "axios";

export class StateData extends Component {
  constructor() {
    super();
    this.state = {
      stateData: {},
    };
  }

  componentDidMount() {
    axios
      .get("https://data.covid19india.org/state_district_wise.json")
      .then((response) => {
        this.setState({ stateData: response.data });
      });
  }

  render() {
    let key = Object.keys(this.state.stateData);

    return (
      <div className="row">
        <div className="col-md-12 mt-4 pl-5" style={{ textAlign: "left" }}>
          <Accordion>
            {key.map((item, ky) => {
              let district = this.state.stateData[item].districtData;
              let district_key = Object.keys(district);

              let total_active = 0;
              let total_confirmed = 0;
              let total_recovered = 0;
              let total_deths = 0;

              let district_list=[]

              for(let x in district){
                  total_active += district[x].active;
                  total_confirmed += district[x].confirmed;
                  total_recovered += district[x].recovered;
                  total_deths += district[x].deceased;
                  let ob = district[x];
                  ob['district_name']=x;
                  district_list.push(ob);

              }


              return ( 
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="success" eventKey={ky+1}>
                      {item} <span className='btn-dark p-1 mr-2'> Total cases - {total_active}</span> <span className='btn-dark p-1 mr-2'> Confirmed - {total_confirmed}</span> <span className='btn-dark p-1 mr-2'>  Recovered - {total_recovered} </span> <span className='btn-dark p-1 mr-2'>  Deths - {total_deths} </span>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={ky+1}>
                    <Card.Body>
                        <table className='table table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <td>District</td>
                                    <td>Confirmed</td>
                                    <td>Active</td>
                                    <td>Recovered</td>
                                    <td>Deths</td> 
                                </tr>
                            </thead> 
                            <tbody>
                                    {
                                        district_list.map((item,k)=>{
                                            return(
                                                <tr>
                                                <td>{item.district_name}</td>
                                                <td>{item.confirmed}</td>
                                                <td>{item.active}</td>
                                                <td>{item.recovered}</td>
                                                <td>{item.deceased}</td>
                                                </tr>
                                            )
                                        })
                                    }
                            </tbody>
                        </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })}
          </Accordion>
        </div>
      </div>
    );
  }
}
