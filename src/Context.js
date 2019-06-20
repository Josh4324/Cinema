import React, { Component } from 'react';
import {cinemaData} from './data1';


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
        this.setState(() => {
            return { data: cinemaData};
        });
    };

    addLikes = (id) => {
        let postid = Object.keys(this.state.data).find(key => key === id)
        let data = this.state.data[postid]
        data.likes += 1
        let newdata = this.state.data
        newdata[postid] = data
        this.setState({ data : newdata})
    }

    addDislikes = (id) => {
        let postid = Object.keys(this.state.data).find(key => key === id)
        let data = this.state.data[postid]
        data.dislikes += 1
        let newdata = this.state.data
        newdata[postid] = data
        this.setState({ data : newdata})
    }

    handlePress = (evt,id) => {
        evt.preventDefault()
        if (evt.keyCode === 13){
            let iid = Date.now()
            let postid = Object.keys(this.state.data).find(key => key === id)
            let data = this.state.data[postid]
            data.comments[iid] = {
                name : "ola",
                comment : evt.target.innerText
            }
            data.commentno += 1
            evt.target.innerText = ""
            let newdata = this.state.data
            newdata[postid] = data
            this.setState({ data : newdata})
            console.log(this.state.data)

            
        }

    }


    render() {
        
        return (
            <ProductContext.Provider value={{ ...this.state, addLikes:this.addLikes, addDislikes:this.addDislikes, handlePress:this.handlePress}} >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};