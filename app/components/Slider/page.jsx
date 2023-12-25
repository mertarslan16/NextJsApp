"use client"
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Image } from 'react-bootstrap';
import './slider.css'


const Slider = () => {
    return (
            <Carousel>
                <Carousel.Item interval={15000}>
                    <Image
                        fluid
                        className=""
                        src="https://images.pexels.com/photos/19121814/pexels-photo-19121814/free-photo-of-deniz-kadin-su-model.jpeg"
                        
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={15000}>
                    <Image
                        fluid
                        className="d-block "
                        src="https://images.pexels.com/photos/19121814/pexels-photo-19121814/free-photo-of-deniz-kadin-su-model.jpeg"
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
};


export default Slider