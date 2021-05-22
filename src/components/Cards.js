import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import BeforeAfterSlider from 'react-before-after-slider'
 

function Cards() {
  const before='https://farm2.staticflickr.com/1663/25814974803_d4c55ff708_b.jpg'
  const after ='https://farm2.staticflickr.com/1638/26145024230_06acd55d1b_b.jpg'
  
  
  return (<>
  
    <div className='cards'>
    <div><h1  > your eyes are precious , let people see them clearly
    
    </h1>
    <BeforeAfterSlider
        before={before}
        after={after}
        width={1280}
        height={480}
      />
     
        </div>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <div>
              <h1>
              AWARDS.
FOLLOWERS. REWARDS.
              </h1>
              <p>
              Our work speaks for itself ‐ Specscart has been awarded first prize in Venture Further 2018 Business Category.
             <p> We are constantly working to innovate new ways and technology to become UK’s leading Eye Care provider.
             </p> 
             <p>
             Our work speaks for itself ‐ Specscart has been awarded first prize in Venture Further 2018 Business Category.
             <p>We are constantly working to innovate new ways and technology to become UK’s leading Eye Care provider
             </p>
             </p> 
              </p>

            </div>
            <div>
          <CardItem
              src='images/jai.png'
              text='
              Britain’s finest spectacle frames and glasses frames made to the highest standard'
              label='Awards'
              path='/sign-up'
            />
            </div>

          </ul>
         
            
          
          
          
          <h1>our feeds </h1>
          <p>
          There's an eyewear style for every mood and occasion. What's your pick?
          </p>
          
           
         
          <ul className='cards__items'>
          
            <CardItem
              src='images/Desk4.jpeg'
              text='sharp look for sharp eyes'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/Glass1.jpeg'
              text='expanded frames for expended love'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/7.jpeg'
              text='clear view for clear eyes'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/7.jpeg'
              text='clear view for clear eyes'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
         
        </div>
       
      </div>
    </div>
    </>
  );
}

export default Cards;
