import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import CinemaReview from './CinemaReview';

class Review extends Component {
    render() {
        return (
            <div className="contain py-3">
                <div className="container">
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.data.map(data => {
                                        return <CinemaReview key={value.id} data={data}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                </div>
            </div>
        );
    }
}

export default Review;