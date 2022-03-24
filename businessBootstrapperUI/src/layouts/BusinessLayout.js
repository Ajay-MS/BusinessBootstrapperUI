import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import "../assets/css/button.css";



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

function BusinessLayout() {
  return (
    <>
     <div id='button'>
     <Link to="/form">
    <button> Create</button>
    </Link>
  </div>
      <Container fluid>
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
                    <tr>
                      <td>1</td>
                      <td>FHLecommerce</td>
                      <td>Ecommerce</td>
                      <td>
                      <Link to="/admin">
                        <Button className="btn-fill" variant="primary" >View</Button >
                        </Link>
                       </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>FHLstream</td>
                      <td>Streaming</td>
                      <Link to="/admin">
                      <td><Button className="btn-fill" variant="primary" >View</Button ></td>
                      </Link>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>FHLwallet</td>
                      <td>Wallet</td>
                      <Link to="/admin">
                      <td><Button className="btn-fill" variant="primary">View</Button ></td>
                      </Link>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>FHLchat</td>
                      <td>Messenger</td>
                      <Link to="/admin">
                      <td><Button className="btn-fill" variant="primary" >View</Button ></td>
                      </Link>
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

export default BusinessLayout;
