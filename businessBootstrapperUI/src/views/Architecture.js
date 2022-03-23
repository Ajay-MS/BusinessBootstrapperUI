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

class Architecture extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      edges: [],
    }
  }

  componentDidMount = () => {
    this.setState({
      nodes: this.getNodes(),
      edges: this.getEdges(),
    })
  }

  constructNode = (id, label, x, y, type) => {
    return {
      id: id,
      type: type == "" ? 'default': type,
      data: {
        label: label,
      },
      position: { x: x, y: y },
    }
  }

  getNodes = () => {
    const nodes = [
      this.constructNode('1', 'frontend', 200, 100, 'input'),
      this.constructNode('2', 'admin', 400, 100, 'input'),
      this.constructNode('3', 'load balancer', 300, 200),
      this.constructNode('4', 'backend', 300, 300),
      this.constructNode('5', 'database', 300, 400, 'output'),
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
        label: 'user',
      },
      {
        id: 'e2-3',
        source: '2',
        target: '3',
        animated: true,
        label: 'admin',
      },,
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
