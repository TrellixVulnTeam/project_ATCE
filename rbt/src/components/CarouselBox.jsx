import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import forestImg from '../assets/pexels-bri-schneiter-346529.jpg'
import dforestImg from '../assets/pexels-quang-nguyen-vinh-2166711.jpg'

export default class CarouselBox extends Component {
    render() {
        return (

            <Carousel>
                <Carousel.Item>
                    <img className='d-block w-100' height='800' src={forestImg} alt="pic1" />
                    <Carousel.Caption>
                        <h3>
                            Forest Image
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, doloremque! Ab non facilis error ipsa eum enim. Asperiores laborum quos, numquam at quae expedita? Necessitatibus maxime delectus impedit atque earum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100' height='800' src={dforestImg} alt="pic1" />
                    <Carousel.Caption>
                        <h3>
                            Forest Image
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, doloremque! Ab non facilis error ipsa eum enim. Asperiores laborum quos, numquam at quae expedita? Necessitatibus maxime delectus impedit atque earum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
