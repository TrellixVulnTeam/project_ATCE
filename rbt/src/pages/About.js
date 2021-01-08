import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tab-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav.Link variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>
                                        Design
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>
                                        Team
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>
                                        Programming
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fourth'>
                                        Frameworks
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fifth'>
                                        Libraries
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav.Link>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey='first'>
                                    <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rem mollitia nesciunt sed quaerat veritatis facilis rerum suscipit provident! Exercitationem hic, dolore veritatis tempore impedit deleniti ducimus vitae eos quos.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img src="https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rem mollitia nesciunt sed quaerat veritatis facilis rerum suscipit provident! Exercitationem hic, dolore veritatis tempore impedit deleniti ducimus vitae eos quos.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img src="https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rem mollitia nesciunt sed quaerat veritatis facilis rerum suscipit provident! Exercitationem hic, dolore veritatis tempore impedit deleniti ducimus vitae eos quos.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <img src="https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rem mollitia nesciunt sed quaerat veritatis facilis rerum suscipit provident! Exercitationem hic, dolore veritatis tempore impedit deleniti ducimus vitae eos quos.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifth'>
                                    <img src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rem mollitia nesciunt sed quaerat veritatis facilis rerum suscipit provident! Exercitationem hic, dolore veritatis tempore impedit deleniti ducimus vitae eos quos.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
