import React from "react";
import Plot from 'react-plotly.js';
import './StocksPrice.css'

class StockPrice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: [],
        }
        //Binding method
        this.onBuyClick = this.onBuyClick.bind(this);
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const pointerToThis = this;
        console.log(pointerToThis);
        const API_KEY = 'K3733Q7LUM1W3AO0';
        let StockSymbol = 'TSLA'
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_Call)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for (var key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }

                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    });
                }
            )
    }

    onBuyClick() {
        //Total price printed on the console - try to store it in a variable
        let TotlalPrice = console.log(this.state?.stockChartYValues[0]*document.getElementById("replyNumber")?.value);
    }

    render () {
        let CurrentPrice = this.state.stockChartYValues[0];
        let TodayDate = this.state.stockChartXValues[0];
        return (
            <div className="container">
                <br></br>
                <h1>TESLA STOCK PRICE ANALYSIS</h1>
                <Plot
                    data={[
                        {
                            x: this.state.stockChartXValues,
                            y: this.state.stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'orange'},
                        },
                    ]}
                    layout={{width: 1240, height: 400, title: 'DAILY OPEN PRICE'}}
                />
                <h1>Price on {TodayDate} : ${CurrentPrice}</h1>
                <div className="row">
                    <input type="number" id="replyNumber" min="0" data-bind="value:replyNumber" placeholder='QTY' defaultValue={0} />   
                    <button className="btn btn-primary" onClick={this.onBuyClick}>BUY</button>
                </div>
            </div>
        )
    }
}

// export const stockChartYValues = this.state.stockChartYValues[0];

export default StockPrice;