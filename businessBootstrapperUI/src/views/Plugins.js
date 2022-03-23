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
  Form,
} from "react-bootstrap";

class Plugins extends React.Component {

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Plugins</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="8">
                        <Form.Group>
                          <Form.Control
                            placeholder="Plugins"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="3">
                        <Form.Group>
                          <Button
                            className="btn-fill"
                            type="submit"
                            variant="info"
                          >
                            Add Plugin
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Installed plugins</Card.Title>
                  <p className="card-category">
                    Manage additional functionalities
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">Name</th>
                        <th className="border-0">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Metrics</td>
                        <td>Integration with the detailed metrics</td>
                        <td><Button className="btn-fill" variant="warning">Uninstall</Button ></td>
                      </tr>
                      <tr>
                        <td>Single sign-on</td>
                        <td>Single sign in from Microsoft, Google and Facebook accounts</td>
                        <td><Button className="btn-fill" variant="warning">Uninstall</Button ></td>
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

export default Plugins;
