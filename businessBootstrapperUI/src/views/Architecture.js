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
} from "react-bootstrap";

import ReactFlow, {
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  Node,
  Edge,
  useReactFlow,
} from 'react-flow-renderer';
var request = require("request");
import Cookies from 'universal-cookie';
const cookies = new Cookies()

const NODE_WIDTH = 200;
const NODE_HEIGHT = 50;

class Architecture extends React.Component {

  constructor(props) {
    super(props);
    var data = this.getNodesAndEdges();
    this.state = {
      nodes: this.getNodes(),
      edges: this.getEdges(),
      info: {},
      businessId: cookies.get('businessId'),
    }
  }

  componentDidMount = () => {
    console.log("Old");
    console.log(this.state.edges);
    // this.fetchArchInfo();

    var data = this.getNodesAndEdges();
    console.log(data.edges);
    this.setState({
      nodes: data.nodes,
      edges: data.edges
    })
  }

  fetchArchInfo = () => {
    var options = { 
      method: 'GET',
      url: 'http://localhost:8080/architecture-meta/api/' + cookies.get('businessId'),
      headers: { 'content-type': 'application/json' },
      json: true 
    };

    var that = this;

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      
      that.procesArchitecture(body.structure);
    });
  } 

  procesArchitecture = (info) => {
    const nodes = [];

    var archinfo = JSON.parse(info);
    for (var data of archinfo.nodes) {
      var node = this.constructNode(data.id, data.name, data.x, data.y, data.type, data.archType);
      nodes.push(node); 
    }

    const edges = [];
    for (var data of archinfo.edges) {
      var edge = this.constructEdge(data.source, data.target, data.label);
      edges.push(edge); 
    }

    this.setState(
      {
        nodes: nodes,
        edges: edges,
      }
    )
  }

  constructNode = (id, label, x, y, type, archType) => {
    return {
      id: id,
      type: type == "" ? 'default': type,
      data: {
        label: label,
      },
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      style: this.getStyle(archType),
      position: { x: x, y: y },
    }
  }

  constructEdge = (sourceId, targetId, label) => {
    return {
      id: "e" + sourceId + "-" + targetId,
      source: sourceId,
      target: targetId,
      animated: true,
      label: "label"
    };
  }

  getStyle = (archType) => {
    switch(archType) {
      case "frontend":
        return {
          background: '#FFEC94',
        }
      case "loadbalancer":
        return {
          background: '#FFAEAE',
        };
      case "backend":
        return {
          background: '#B0E57C',
        }
      case "database":
        return {
          background: '#56BAEC',
          
        }
      default:
        return {
          background: '#f5f5dc',
        };
    }
  }

  getNodesAndEdges = () => {
    var businessId = cookies.get('businessId');

    if (businessId == 1)
    {
      return this.constructFHLChatArch();
    } else if (businessId == 2) {
      return this.constructStreamingArch();
    } else if (businessId == 3) {
      return this.constructHastebinArch();
    } else {
      return {
        nodes: [],
        edges: []
      }
    }
  }

  constructFHLChatArch = () => {
    const nodes = [
      this.constructNode('1', 'User Portal', 200, 100, 'input','frontend' ),
      this.constructNode('2', 'Admin Portal', 400, 100, 'input', 'frontend'),
      this.constructNode('3', 'Load balancer', 300, 200, null,'loadbalancer'),
      this.constructNode('4', 'Rocket Chat', 300, 300, null, 'backend'),
      this.constructNode('5', 'Mongo DB', 300, 400, 'output', 'database'),
    ];

    const edges = [
      {
        id: 'e1-3',
        source: '1',
        target: '3',
        animated: true,
        label: 'admin',
      },{
        id: 'e2-3',
        source: '2',
        target: '3',
        animated: true,
        label: 'admin',
      },
      {
        id: 'e3-4',
        source: '3',
        target: '4',
        animated: true,
        label: 'backend',
      },
      {
        id: 'e4-5',
        source: '4',
        target: '5',
        animated: true,
        label: 'database',
      }
    ];

    return {
      edges: edges,
      nodes: nodes,
    }
  }

  constructHastebinArch = () => {
    const nodes = [
      this.constructNode('1', 'Frontend', 300, 100, 'input','frontend' ),
      this.constructNode('3', 'Hastebin Server', 300, 200, null, 'backend'),
      this.constructNode('5', 'Cosmos DB', 300, 300, null, 'database'),
    ];

    const edges = [
      {
        id: 'e1-3',
        source: '1',
        target: '3',
        animated: true,
        label: 'user',
      },
      {
        id: 'e3-5',
        source: '3',
        target: '5',
        animated: true,
        label: 'database',
      }
    ];

    return {
      edges: edges,
      nodes: nodes,
    }
  }

  constructStreamingArch = () => {
    const nodes = [
      this.constructNode('1', 'Streaming Client', 200, 100, 'input','frontend' ),
      this.constructNode('2', 'OBS Client', 400, 100, 'input', 'frontend'),
      this.constructNode('3', 'Stream Server', 300, 200, null, 'backend'),
      this.constructNode('4', 'Azure Blob', 200, 300, 'output', 'database'),
      this.constructNode('5', 'MySQL Database', 400, 300, 'output', 'database'),
    ];

    const edges = [
      {
        id: 'e1-3',
        source: '1',
        target: '3',
        animated: true,
        label: 'user',
      },{
        id: 'e2-3',
        source: '2',
        target: '3',
        animated: true,
        label: 'platform',
      },
      {
        id: 'e3-4',
        source: '3',
        target: '4',
        animated: true,
        label: 'stream',
      },
      {
        id: 'e3-5',
        source: '3',
        target: '5',
        animated: true,
        label: 'metdata',
      }
    ];

    return {
      edges: edges,
      nodes: nodes,
    }
  }

  getNodes = () => {
    const nodes = [
      this.constructNode('1', 'frontend', 200, 100, 'input','frontend' ),
      this.constructNode('2', 'admin', 400, 100, 'input', 'frontend'),
      this.constructNode('3', 'load balancer', 300, 200, null,'loadbalancer'),
      this.constructNode('4', 'backend', 300, 300, null, 'backend'),
      this.constructNode('5', 'database', 300, 400, 'output', 'database'),
    ];

    return nodes;
  }

  getEdges = () => {
    const edges = [
      {
        id: 'e1-3',
        source: '1',
        target: '3',
        animated: true,
        label: 'admin',
      },{
        id: 'e2-3',
        source: '2',
        target: '3',
        animated: true,
        label: 'admin',
      },
      {
        id: 'e3-4',
        source: '3',
        target: '4',
        animated: true,
        label: 'backend',
      },
      {
        id: 'e4-5',
        source: '4',
        target: '5',
        animated: true,
        label: 'database',
      }
    ];

    return edges;
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <div style={{ height: 800 }}>
                <ReactFlow
                    defaultNodes={this.state.nodes}
                    defaultEdges={this.state.edges}
                    className="react-flow-basic-example"
                  >
               </ReactFlow>
              </div>
              
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Architecture;
