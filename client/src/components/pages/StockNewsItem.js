import { Button } from 'bootstrap'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Stocks_cards.css'
import StockPrice_AAPL from '../Stocks/StockPrice_AAPL'
import Plot from "react-plotly.js";
import StocksAPI from './StocksAPI'
import { render } from '@testing-library/react'






class StockNewsItem extends Component {
    render() {
        let {title,subtitle,description,imageURL,path,price} = this.props
        return (
            <div className="container mx-auto mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card" style={{width: "18rem"}}>
                        <figure className='cards__item__pic-wrap' data-category={title}>
                            <img src={imageURL} alt='Stock'
                                className='cards__item__img'/>
                                    </figure>
                                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                                <h4 className="card-text">{description}</h4>
                                <div className="col-sm-12">
                                    <Link to={path} className='btn'><span><i className="fas fa-wallet"></i> VIEW PRICES </span></Link>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
        )
    }   
}

export default StockNewsItem