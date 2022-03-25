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
import Dropdown from 'react-dropdown';

class Plugins extends React.Component {

  constructor(props){
    super(props);
    this.state = 
      {
        plugins: [
          "Microsoft Single sign-on",
          "Google Single sign-on",
          "Linked-in Single sign-on",
          "AAD integration",
          "Matrix - prometheus.io",
          "Audit integration",
          "Service Mesh Integration",
          "SSL Integration",
        ],
        installedPlugins: [
          "Microsoft Single sign-on",
          "Matrix - prometheus.io",
        ],

        pluginOptions: [],
        selectedValue: "",
      }
    
  }

  buildOptions = () => {
    for(var plugin of this.state.plugins)
    {
      this.state.pluginOptions.push({value: plugin, label: plugin});
    }
  }

  componentDidMount = () => {
    this.buildOptions();
  }

  addPluginClick = (args) => {
    var installedPlugins = this.state.installedPlugins;
    console.log(args);
    installedPlugins.push(this.state.selectedValue);
    this.setState(
      {installedPlugins: installedPlugins}
    )
  }

  _onSelect  = (args) => {
    this.setState({
      selectedValue: args.value,
    });
  }

  render() {

    const pluginsTable = [];

    for (var plugin of this.state.installedPlugins) {
      pluginsTable.push(

              <tr>
                    <td>{plugin}</td>
                    <td>Add {plugin}</td>
                    <td><Button className="btn-fill" variant="warning">Uninstall</Button ></td>
              </tr>

      )
    }

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
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Dropdown options={this.state.pluginOptions} placeholder="Select plugin" onChange={this._onSelect} />
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="3">
                        <Form.Group>
                          <Button
                            className="btn-fill"
                            onClick={this.addPluginClick}
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
                      {pluginsTable}
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
