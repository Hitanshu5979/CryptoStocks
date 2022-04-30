import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1> Checkout these Options</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src = './images/img-9.jpg'
                    label = 'INVESTMENTS'
                    text='MUTUAL FUNDS'
                    path='/Services'
                    />
                     <CardItem
                    src = './images/img-3.jpg'
                    label = 'TRADING     '
                    text='STOCKS'
                    path='/Products'
                    />
                    <CardItem
                    src = './images/img-4.jpg'
                    label = 'LATEST     '
                    text='IPO'
                    path='/'
                    />
                    <CardItem
                    src = './images/img-6.jpg'
                    label = 'INVESTMENT'
                    text='FUTURES AND OPTIONS'
                    path='/'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;
