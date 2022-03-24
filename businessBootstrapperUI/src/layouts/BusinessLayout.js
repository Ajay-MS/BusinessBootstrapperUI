import React from "react";


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
} from "react-bootstrap";
var request = require("request");

class  BusinessLayout extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      businesses: [],
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
    this.fetchBusinesses();
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

  render() {

    const businessRows = [];
    for( let business of this.state.businesses) {
      console.log(business);

      var typeName = this.state.typesMap[business.type];

      businessRows.push(
        <tr key={business.id}>
          <td>{business.id}</td>
          <td>{business.name}</td>
          <td>{typeName}</td>
          <td><Button className="btn-fill" variant="primary">View</Button ></td>
        </tr>
      )
    }

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
                 
                  
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </>
    );
  }
  
}

export default BusinessLayout;
