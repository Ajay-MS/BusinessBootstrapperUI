import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
var request = require("request");
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class BusinessProfile extends React.Component {

  constructor(props){
    super(props);
    console.log("Id : " + this.props.match.params.id)
    this.state = {
      businessData: {},
      businessId: cookies.get('businessId'),
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
    }
  }

  componentDidMount = () => {
    console.log(this.state.businessId);
    this.fetchProfileInfo();
  }

  fetchProfileInfo = () => {
    var options = { 
      method: 'GET',
      url: 'http://localhost:8080/business/api/' + this.state.businessId,
      headers: { 'content-type': 'application/json' },
      json: true 
    };

    var that = this;

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      that.setState({
        businessData: body,
      })
    });
  } 

  onClickUserPortal = () => {
    window.open(this.state.businessData.userPortal, "_blank") //to open new page
  }

  onClickAdminPortal = () => {
    window.open(this.state.businessData.adminURL, "_blank") //to open new page
  }

  render() {
    const businessData = this.state.businessData;
    const businessType = this.state.typesMap[businessData.type];
    const businessEmail = "Support@" + businessData.name + ".com"
    return (
      <>
        <Container fluid>
          <div>
            {this.props.match.params.id}
          </div>
          <Row>
            <Col md="8">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Business Profile</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <Form.Group>
                          <label>Company</label>
                          <Form.Control
                            value={businessData.name}
                            disabled
                            placeholder="Company"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="3">
                        <Form.Group>
                          <label>Business Type</label>
                          <Form.Control
                            value={businessType}
                            placeholder="Business Type"
                            disabled
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Form.Control
                            disabled
                            value={businessEmail}
                            placeholder="Email"
                            type="email"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pl-1" md="2">
                      <Form.Group>
                        <label htmlFor="userPortalUrl">
                            Admin Portal URL
                          </label>
                          </Form.Group>
                      </Col>
                      <Col className="pl-1" md="6">
                        <Form.Group>
                        
                          <Form.Control
                            disabled
                            defaultValue={businessData.adminURL}
                            placeholder="adminurl"
                            type="text"
                          ></Form.Control>
                          
                        </Form.Group>
                      </Col>
                      <Col md ="4">
                          <Button
                              className="btn-fill pull-right"
                              variant="warning"
                              onClick={this.onClickAdminPortal}
                            >
                              Go to Admin Portal
                          </Button>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="pl-1" md="2">
                      <Form.Group>
                        <label htmlFor="userPortalUrl">
                            User Portal URL
                          </label>
                          </Form.Group>
                      </Col>
                      <Col className="pl-1" md="6">
                        <Form.Group>
                          <Form.Control
                            disabled
                            defaultValue={businessData.userPortal}
                            placeholder="userPortal"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md ="4">
                          <Button
                              className="btn-fill pull-right"
                              variant="warning"
                              onClick={this.onClickUserPortal}
                            >
                              Go to User Portal
                          </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pl-1" md="8">
                        <Form.Group>
                          <label htmlFor="fda">
                              Business Infrastructure
                            </label>
                        </Form.Group>
                      </Col>
                      <Col md = "4">
                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="info"
                        >
                          Infra on Azure
                        </Button>
                      </Col>
                    </Row>
                    
                    <div className="clearfix"></div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <div className="card-image">
                  <img
                    alt="..."
                    src={
                      require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                        .default
                    }
                  ></img>
                </div>
                <Card.Body>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/faces/face-0.jpg").default}
                      ></img>
                      <h5 className="title">Mayank Agarwal</h5>
                    </a>
                    <p className="description">mayankagarwal@microsoft.com</p>
                  </div>
                  <p className="description text-center">
                    "FHL corporation aims <br></br>
                    to deliver services to customers <br></br>
                    at high pace"
                  </p>
                </Card.Body>
                <hr></hr>
                <div className="button-container mr-auto ml-auto">
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-google-plus-square"></i>
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
 
}

export default BusinessProfile;
