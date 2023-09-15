import React from 'react'
import CardItem from '../CardItem/CardItem';
import '../Cards/Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations!!!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/amazon.jpg'
                    text='Explore this hidden waterfall deep inside the Amazon jungle'
                    label='adventure'
                    path='/services'
                    />
                       <CardItem
                    src='images/jungle-waterfall.jpg'
                    text='Spend a splendid vaccation in the beautiful islands of Maldives'
                    label='adventure'
                    path='/services'
                    />
                      <CardItem
                    src='images/seegiriya.jpg'
                    text='Spend a splendid vaccation in the beautiful islands of Maldives'
                    label='adventure'
                    path='/services'
                    />
                    </ul>

                    <ul className='cards__items'>
                     <CardItem
                    src='images/starange-cave.jpg'
                    text='Spend a splendid vaccation in the beautiful islands of Maldives'
                    label='adventure'
                    path='/services'
                    />
                      <CardItem
                    src='images/victoriafalls.jpg'
                    text='The Pacific ocean has way more wonders than you think you know'
                    label='adventure'
                    path='/services'
                    />
                    <CardItem
                    src='images/dessert.jpg'
                    text='Explore this hidden waterfall deep inside the Amazon jungle'
                    label='adventure'
                    path='/services'
                    />
                   
                </ul>
                <ul className='cards__items'>
                <CardItem
                    src='images/jungle-waterfall.jpg'
                    text='The Pacific ocean has way more wonders than you think you know'
                    label='adventure'
                    path='/services'
                    />
                    
                     <CardItem
                    src='images/banff-nationalpark.jpg'
                    text='Get engulfed in the divinity of the islands in Seachelles'
                    label='adventure'
                    path='/services'
                    />
                       <CardItem
                    src='images/lake-retba.jpg'
                    text='Explore this hidden waterfall deep inside the Amazon jungle'
                    label='adventure'
                    path='/services'
                    />
                  
                    </ul>
                    <ul className='cards__items'>
                    <CardItem
                    src='images/seachelles.jpg'
                    text='Get engulfed in the divinity of the islands in Seachelles'
                    label='adventure'
                    path='/services'
                    />
                      <CardItem
                    src='images/orange_mountain.jpg'
                    text='The Pacific ocean has way more wonders than you think you know'
                    label='adventure'
                    path='/services'
                    />
                     <CardItem
                    src='images/img-4.jpg'
                    text='Spend a splendid vaccation in the beautiful islands of Maldives'
                    label='adventure'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards