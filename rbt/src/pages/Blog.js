import React, { Component } from 'react'
import { Media, Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md='9'>
                            <Media className='m-5'>
                                <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" width={150} height={150} className='mr-3' />
                                <Media.Body>
                                    <h5>Blog</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium, aliquam culpa illum voluptates fuga quos neque exercitationem dicta ipsum error similique nihil cum suscipit, assumenda dolorum modi repudiandae vero!</p>
                                </Media.Body>
                            </Media>
                            <Media className='m-5'>
                                <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" width={150} height={150} className='mr-3' />
                                <Media.Body>
                                    <h5>Blog</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium, aliquam culpa illum voluptates fuga quos neque exercitationem dicta ipsum error similique nihil cum suscipit, assumenda dolorum modi repudiandae vero!</p>
                                </Media.Body>
                            </Media>
                            <Media className='m-5'>
                                <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" width={150} height={150} className='mr-3' />
                                <Media.Body>
                                    <h5>Blog</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium, aliquam culpa illum voluptates fuga quos neque exercitationem dicta ipsum error similique nihil cum suscipit, assumenda dolorum modi repudiandae vero!</p>
                                </Media.Body>
                            </Media>
                            <Media className='m-5'>
                                <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" width={150} height={150} className='mr-3' />
                                <Media.Body>
                                    <h5>Blog</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium, aliquam culpa illum voluptates fuga quos neque exercitationem dicta ipsum error similique nihil cum suscipit, assumenda dolorum modi repudiandae vero!</p>
                                </Media.Body>
                            </Media>
                            <Media className='m-5'>
                                <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" width={150} height={150} className='mr-3' />
                                <Media.Body>
                                    <h5>Blog</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium, aliquam culpa illum voluptates fuga quos neque exercitationem dicta ipsum error similique nihil cum suscipit, assumenda dolorum modi repudiandae vero!</p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col md='3'>
                            <h5 className='text-center mt-5'>Categories</h5>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        First #
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Seconf #
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Third #
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Fourth #
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Five  #
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                            <Card className='mt-3' bg='light'>
                                <Card.Body>
                                    <Card.Title>Side</Card.Title>
                                    <Card.Text> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, vitae vero ipsa tenetur quidem voluptates.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
