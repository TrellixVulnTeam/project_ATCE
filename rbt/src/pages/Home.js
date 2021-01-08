import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox'
import { Container, CardDeck, Card, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox />
                <Container>
                    <h2 className='text-center m-4'>Team</h2>
                    <CardDeck className='m-4'>
                        <Card >
                            <Card.Img variant='top' src='https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, asperiores. A, soluta? </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>

                        </Card>
                        <Card>

                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, asperiores. A, soluta? </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                            <Card.Img variant='bottom' src='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />

                        </Card>
                        <Card>
                            <Card.Img variant='top' src='https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, asperiores. A, soluta? </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>

                        </Card>
                    </CardDeck>
                </Container>
            </div>
        )
    }
}
