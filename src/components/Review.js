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
                                    return Object.keys(value.data).map(key => {
                                        return <CinemaReview key={key} data={value.data[key]} new={key}/>
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