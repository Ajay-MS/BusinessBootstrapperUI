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
import Cookies from 'universal-cookie';
const cookies = new Cookies()

class Pricing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      businessId: cookies.get('businessId'),
      pricingData: []
    }
  }

  componentDidMount() {
    this.fetchPricingInfo();
  }

  fetchPricingInfo = () => {
    var options = { 
      method: 'GET',
      url: 'http://localhost:8080/pricing-meta/api/' + this.state.businessId,
      headers: { 'content-type': 'application/json' },
      json: true 
    };

    var that = this;

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      
      var pricingData = JSON.parse(body.pricing);
      that.setState({
        pricingData: pricingData
      })
    });
  } 


  

  render() {

    var totalPrice = 0;
    const pricingComponents = [];

    for (var compo of this.state.pricingData)
    {
      var price = "$" + compo.price;
      pricingComponents.push(
        <tr>
          <td>{compo.name}</td>
          <td>{compo.component}</td>
          <td>{compo.type}</td>
          <td>{compo.config}</td>
          <td align="right">{price}</td>
        </tr>
      )
      totalPrice += parseInt(compo.price);
    }

    const totalPriceString = "$" + totalPrice;

    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Pricing</Card.Title>
                  <p className="card-category">
                    Components
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">Name</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Plan</th>
                        <th className="border-0">Config</th>
                        <th className="border-0">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingComponents}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <p className="card-category">
                    Total Cost
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <tbody>
                      <tr>
                        <td align="right">{totalPriceString}</td>
                      </tr>
                      
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

export default Pricing;
