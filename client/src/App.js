import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route, Routes} from
'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import StocksAPI from './components/pages/StocksAPI';
import StockPrice_AAPL from './components/Stocks/StockPrice_AAPL';
import StockPrice_AMZN from './components/Stocks/StockPrice_AMZN';
import StockPrice_FB from './components/Stocks/StockPrice_FB';
import StockPrice_GOOGL from './components/Stocks/StockPrice_GOOGL';
import StockPrice_MSFT from './components/Stocks/StockPrice_MSFT';
import StockPrice_NFLX from './components/Stocks/StockPrice_NFLX';
import StockPrice_SPOT from './components/Stocks/StockPrice_SPOT';
import StockPrice_TSLA from './components/Stocks/StockPrice_TSLA';
import StockPrice_UBER from './components/Stocks/StockPrice_UBER';
function App() {
  return (
 <>
 <Router>
   <Navbar />
     <Routes>
       <Route path='/'  element={<Home />}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/StocksAPI' element={<StocksAPI/>}/>
       <Route path='/sign-up' element={<SignUp/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/stockprice_aapl' element={<StockPrice_AAPL/>}/>
      <Route path='/stockprice_amzn' element={<StockPrice_AMZN/>}/>
      <Route path='/stockprice_fb' element={<StockPrice_FB/>}/>
      <Route path='/stockprice_googl' element={<StockPrice_GOOGL/>}/>
      <Route path='/stockprice_msft' element={<StockPrice_MSFT/>}/>
      <Route path='/stockprice_nflx' element={<StockPrice_NFLX/>}/>
      <Route path='/stockprice_spot' element={<StockPrice_SPOT/>}/>
      <Route path='/stockprice_tsla' element={<StockPrice_TSLA/>}/>
      <Route path='/stockprice_uber' element={<StockPrice_UBER/>}/>
       </Routes>
 </Router>
 </>
  );
}

export default App;
