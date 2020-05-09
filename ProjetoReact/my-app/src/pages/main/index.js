import React, { Component } from 'react'
import api from "../../services/api";
export default class Main extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        this.loadProducts()
    }


    loadProducts = async () => {
        const res = await api.get('/products')
        this.setState({ products: res.data.docs })
    }

    render() {
        return (
            <div>
                {this.state.products.map(p =>
                    <h2>{p.login}</h2>
                )}
            </div>
        )
    }
}