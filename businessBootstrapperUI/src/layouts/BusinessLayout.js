import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Link, useHistory } from "react-router-dom";
import "../assets/css/button.css";
import Dropdown from 'react-dropdown';
import Cookies from 'universal-cookie';


// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  ButtonToolbar,
  Modal,
  Form,
} from "react-bootstrap";
import CreateBusiness from "./CreateBusiness";
var request = require("request");
const cookies = new Cookies();

class  BusinessLayout extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      businesses: [],
      businessTypeOptions: [],
      typesMap: {
          "1": "URL Shortener",
          "2": "ECommerce",
          "3": "Messenger",
          "4": "Social Media",
          "5": "Streaming",
          "6": "Cloud File System",
          "7": "Wallet",
          "8": "Payment Gateway",
          "9": "Code Sharing",
          "10": "VoIP Calling",
          "11": "Food Ordering",
          "12": "Appointment Booking",
          "13": "Hotel Booking",
          "14": "Git Versioning Control"
      },
      businessName: "",
      businessType: "",
      isEditMode: false,
    }
  }

  _onCreateClick = () => {
    console.log("Setting edit mode");
    this.setState(
      {
        isEditMode: true
      }
    )
  }

  _onClose = () => {
    this.setState(
      {
        isEditMode: false
      }
    )
  }

  componentDidMount = () => {
    this.fetchBusinesses();
    this.fetchBusinssTypeOptions();
  }

  fetchBusinssTypeOptions = () => {
    var options = { 
      method: 'GET',
      url: 'http://localhost:8080/metadata/business/types',
      headers: { 'content-type': 'application/json' },
      json: true 
    };

    var that = this;

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      let types = [];
      for(let [key, value] of Object.entries(body)) {
        types.push({value: key, label: value});
      }

      that.setState({businessTypeOptions: types});
    });
  } 

  fetchBusinesses = () => {
    var options = { 
      method: 'GET',
      url: 'http://localhost:8080/business/api',
      headers: { 'content-type': 'application/json' },
      json: true 
    };

    let that = this;

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      that.setState({
        businesses: body,
      })
    });

  }

  _onBusinessTypeSelect  = (args) => {
    this.setState({
      businessType: args.value,
    });
  }

  onBusinessSave = () => {
      if (!this.state.businessName || !this.state.businessType) {
        console.log("invalid input values");
      }

    var options = 
    { method: 'POST',
      url: 'http://localhost:8080/business',
      headers: { 'content-type': 'application/json' },
      body: 
      { 
        name: this.state.businessName,
        type: this.state.businessType,
      },
      json: true 
    };

    var that = this;

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

       this.toggleBusinessModal();
       this.fetchBusinesses();
    });
  }

  onViewClick = (args) => {
    const businessId = args.target.id;
    cookies.set('businessId', businessId);

    this.props.history.push('/admin/user');
  }

  listModeView = () => {

    const businessRows = [];
    for( let business of this.state.businesses) {
      console.log(business);

      var typeName = this.state.typesMap[business.type];

      businessRows.push(
        <tr key={business.id}>
          <td>{business.id}</td>
          <td>{business.name}</td>
          <td>{typeName}</td>
          <td><Button id={business.id}  className="btn-fill" variant="primary" onClick={this.onViewClick}>View</Button ></td>
        </tr>
      )
    }

    return (

      <div>
        <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Business</Card.Title>
                  <p className="card-category">
                    List of business
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Row>
                      <Col md="12" >
                         <ButtonToolbar className="justify-content-end">
                            <Button className="btn-fill" variant="primary" onClick={this._onCreateClick}>Create</Button >                    
                         </ButtonToolbar>            
                      </Col>
                  </Row>
                  <Row>
                      <Table className="table-hover table-striped">
                        <thead>
                          <tr>
                            <th className="border-0">ID</th>
                            <th className="border-0">Name</th>
                            <th className="border-0">Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {businessRows}
                        </tbody>
                      </Table>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </div>
      
    );
  }

  getView = () => {

    

    if (this.state.isEditMode) {
      console.log("I am in edite mode");
      return <CreateBusiness closeFunction={this._onClose}/>
    } else {
      const listView = this.listModeView();
      return <div>
        {listView}
      </div>
    }
  }


  render() {

    const listView = this.getView();

    

    return (
      <>
        <Container fluid>
          <Navbar bg="warning" variant="dark" expand="lg">
            <Container>
              
              <Navbar.Brand href="#home">
                BUSINESS BOOTSTRAPPER 
              </Navbar.Brand>
            </Container>
          </Navbar>
          <div>
            {listView}
          </div>
        </Container>
      </>
    );
  }
  
}

export default BusinessLayout;
