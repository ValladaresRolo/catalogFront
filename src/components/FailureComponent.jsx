import React from 'react';
import { Container } from 'react-bootstrap';
import './Hero.css'

export const FailureComponent = () => {
    return (
        <div className="p-5 my-5 mx-1 text-center bg-light hero heroImage" >
            <div className='squareHero' >
                <Container>
                    <h1 className="display-4 textTitle">NO REALIZADA</h1>
                    <p className="lead text-orange">
                        Intenta nuevamente
                    </p>
                </Container>
            </div>
        </div>
    );
}


