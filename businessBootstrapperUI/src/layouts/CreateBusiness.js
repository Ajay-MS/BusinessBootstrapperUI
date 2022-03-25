import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import "../assets/css/button.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';




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
  ButtonGroup,
} from "react-bootstrap";
var request = require("request");

class CreateBusiness extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      businessTypeOptions: [],
      businessName: "",
      businessType: "",
    }
  }

  componentDidMount = () => {
    this.fetchBusinssTypeOptions();
  }

  fetchBusinssTypeOptions = () => {
    var options = { 
      method: 'GET',
      url: 'http://52.226.229.90:8080/metadata/business/types',
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

  _onBusinessTypeSelect  = (args) => {
    this.setState({
      businessType: args.value,
    });
  }

  onClose = () => {
    this.props.closeFunction();
  }

  onBusinessSave = () => {
      if (!this.state.businessName || !this.state.businessType) {
        console.log("invalid input values");
      }

    var options = 
    { method: 'POST',
      url: 'http://52.226.229.90:8080/business',
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
      that.onClose();
    });
  }

  handleBusinessNameChange = (event) => {
    this.setState({businessName: event.target.value});
  }


  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Business</Card.Title>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Business Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Business Name"
                        autoFocus
                        value={this.state.businessName}
                        onChange={this.handleBusinessNameChange}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Business Type</Form.Label>
                      <Dropdown options={this.state.businessTypeOptions} placeholder="Select business type" onChange={this._onBusinessTypeSelect} />
                    </Form.Group>
                  </Form>
                </Card.Body>
                <Card.Footer>
                  <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup>
                      <Button variant="secondary" onClick={this.onClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={this.onBusinessSave}>
                        Save
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                  
                </Card.Footer>
              </Card>
            </Col>
            
          </Row>
    
        </Container>
      </>
    );
  }
  
}

export default CreateBusiness;
