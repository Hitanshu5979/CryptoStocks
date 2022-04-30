import React , { Component} from "react"
import { Link } from "react-router-dom"
//import  ReactDOM  from "react-dom"
import StockNewsItem from "./StockNewsItem"
import StockPrice_AAPL from "../Stocks/StockPrice_AAPL"
import StockPrice_TSLA from "../Stocks/StockPrice_TSLA"
import StockPrice_MSFT from "../Stocks/StockPrice_MSFT"
import StockPrice_GOOGL from "../Stocks/StockPrice_GOOGL"
import StockPrice_FB from "../Stocks/StockPrice_FB"
import StockPrice_AMZN from "../Stocks/StockPrice_AMZN"
import StockPrice_SPOT from "../Stocks/StockPrice_SPOT"
import StockPrice_NFLX from "../Stocks/StockPrice_NFLX"
import StockPrice_UBER from "../Stocks/StockPrice_UBER"
import "./Stocks_cards.css"



class StocksAPI extends Component {
    render() {
    return (
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-4">
                        <StockNewsItem 
                            title ="GOOGL"
                            description="Google"
                            imageURL="https://cdn.discordapp.com/attachments/821274872373837860/967494696182120500/google-logo3.png"
                            path = "/StockPrice_GOOGL"
                            />
                    </div>
                    <div className="col-md-4">
                        <StockNewsItem 
                            title ="AAPL"
                            description="Apple"
                            imageURL="https://cdn.discordapp.com/attachments/821274872373837860/967495563870359652/apple-logo3.png"
                            path = "/StockPrice_AAPL"
                            />
                    </div>
                    <div className="col-md-4">
                        <StockNewsItem 
                            title ="AMZN"
                            description="Amazon"
                            imageURL="https://cdn.discordapp.com/attachments/821274872373837860/967495563690008596/amazon-logo3.png"
                            path = "/StockPrice_AMZN"
                            />
                    </div>
                    <div className="col-md-4">
                        <StockNewsItem 
                            title ="MSFT"
                            description="Microsoft"
                            imageURL="https://cdn.discordapp.com/attachments/821274872373837860/965154559494340619/microsoft-logo.png"
                            path = "/StockPrice_MSFT"
                            />
                    </div>
                    <div className="col-md-4">
                        <StockNewsItem 
                            title ="TSLA"
                            description="Tesla"
                            imageURL="https://cdn.discordapp.com/attachments/821274872373837860/967494194501386290/tesla-logo.png"
                            path = "/StockPrice_TSLA"
                            />
                    </div>
                    <div className="col-md-4">
                        <StockNewsItem 
                            title ="FB"
                            description="Facebook"
                            imageURL="https://cdn.discordapp.com/attachments/821274872373837860/965154559314001951/facebook-logo.png"
                            path = "/StockPrice_FB"
                            />
                    </div>
                    <div className="col-md-4">
                        <StockNewsItem 
                            title ="NFLX"
                            description="Netflix"
                            imageURL="https://cdn.discordapp.com/attachments/821274872373837860/965154559720837140/netflix-logo.png"
                            path = "/StockPrice_NFLX"
                            />
                    </div>
                    <div className="col-md-4">
                        <StockNewsItem 
                            title ="SPOT"
                            description="Spotify"
                            imageURL="https://cdn.discordapp.com/attachments/821274872373837860/967493554953912350/spotify-logo2.png"
                            path = "/StockPrice_SPOT"
                            />
                    </div>
                    <div className="col-md-4">
                        <StockNewsItem 
                            title ="UBER"
                            description="Uber"
                            imageURL="https://cdn.discordapp.com/attachments/821274872373837860/965154560366764032/uber-logo.png"
                            path = "/StockPrice_UBER"
                            />
                    </div>
                </div>
            </div>
        )
    }
}



export default StocksAPI

// ReactDOM.render(<StockNews/>, document.getElementById("root"))