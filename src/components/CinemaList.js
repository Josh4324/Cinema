import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import Cinema from './Cinema';


class CinemaList extends Component {

    render() {
        const {history, logState} = this.props
        console.log(this.props)
       
        return (
            <div>
        
            <div className="contain py-3">
                <div className="container">
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return Object.keys(value.data).map(key => {
                                        return <Cinema key={key} history={history} logState={logState}  data={value.data[key]} new={key}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                </div>
            </div>

          

            </div>
        );
    }
}

export default CinemaList;