import React, { Component } from 'react';
import {cinemaData} from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {

    state={
        data:[],
    }

    componentDidMount() {
        this.setData();
    }

    setData = () => {
        let tempData = [];
        cinemaData.forEach(item => {
            const singleItem = {...item};
            tempData = [...tempData, singleItem];
        });
        this.setState(() => {
            return { data: tempData};
        });
    };

    render() {
        return (
            <ProductContext.Provider value={{ ...this.state,}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};