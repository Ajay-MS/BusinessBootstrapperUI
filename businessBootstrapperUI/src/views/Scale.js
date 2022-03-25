import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  ButtonToolbar,
  InputGroup,
  ButtonGroup,
  FormControl,
  Form
} from "react-bootstrap";
var request = require("request")

class Scale extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      instanceCount: 1,
      enableButton: false,
      businessId: 1
    }
  }

  updateScaleInfo = (instanceCount) => {
    var options = { 
      method: 'GET',
      url: 'http://localhost:8080/business-profile/api/' + this.state.businessId + "/scale/" + instanceCount,
      headers: { 'content-type': 'application/json' },
      json: true 
    };

    var that = this;

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      var scale = body.scale
      var enabled = ( scale > 1 );

      that.setState({
        instanceCount: body.scale,
        enableButton: enabled
      })
    });
  } 

  onClickAddInstance = () => {

    const instanceCount = this.state.instanceCount;
    this.updateScaleInfo(instanceCount + 1);
  }

  onClickRemoveInstance = () => {

    const instanceCount = this.state.instanceCount;
    this.updateScaleInfo(instanceCount - 1);
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Scale</Card.Title>
                  <p className="card-category">
                    Scale infra components
                  </p>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md="8">
                      <Form>
                        <FormControl
                            type="text"
                            value={this.state.instanceCount}
                            disabled
                            placeholder="Input group example"
                            aria-label="Input group example"
                            aria-describedby="btnGroupAddon"
                          />
                      </Form>
                    </Col>
                    <Col md="2">
                        <Button variant="warning" onClick={this.onClickAddInstance}>
                          Add Instance
                        </Button>
                    </Col>
                    <Col md="2">
                        <Button variant="warning" onClick={this.onClickRemoveInstance} disabled={!this.state.enableButton}>
                          Remove Instance
                        </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
 
}

export default Scale;
