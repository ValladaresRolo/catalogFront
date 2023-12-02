import React from 'react';
import { Container } from 'react-bootstrap';
import './Hero.css'

export const Hero = () => {
    return (
        <div className="p-5 my-5 mx-1 text-center bg-light hero heroImage" >
            <div className='squareHero' >
                <Container>
                    <h1 className="display-4 textTitle">Las Bike mas Pulentas</h1>
                    <p className="lead text-white">
                        y mucho más
                    </p>
                </Container>
            </div>
        </div>
    );
}


