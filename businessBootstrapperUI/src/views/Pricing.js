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

class Pricing extends React.Component {

  render() {
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
                      <tr>
                        <td>User portal</td>
                        <td>App Service</td>
                        <td>B1</td>
                        <td>1 Core, 1.75 GB RAM, 10 GB storage</td>
                        <td align="right">$55.80</td>
                      </tr>
                      <tr>
                        <td>Admin portal</td>
                        <td>App Service</td>
                        <td>B1</td>
                        <td>1 Core, 1.75 GB RAM, 10 GB storage</td>
                        <td align="right">$55.80</td>
                      </tr>
                      <tr>
                        <td>Load balancer</td>
                        <td>Load balancer</td>
                        <td>Basic</td>
                        <td>-</td>
                        <td align="right">$0.0</td>
                      </tr>
                      <tr>
                        <td>Backend System</td>
                        <td>App Service</td>
                        <td>B2</td>
                        <td>2 Core, 3.5 GB RAM, 10 GB storage</td>
                        <td align="right">$109.50</td>
                      </tr>
                      <tr>
                        <td>Database</td>
                        <td>Azure MySQL</td>
                        <td>General Purpose</td>
                        <td>2 core</td>
                        <td align="right">$127.50</td>
                      </tr>
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
                        <td align="right">$349.57</td>
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
