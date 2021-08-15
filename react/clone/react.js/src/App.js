import React from 'react';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'



function App() {
  return (
    <div className="App">
    <Header/>
    <div className='app_itemsContainer'>
      <Item 
      title='Lowest Cost Solar Panel in America'
      desc='Money-back guarantee'
      descLink=''
      backgroundImg={SolarPanels}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='EXISTING INVENTORY'
      rightBtnLink=''
      twoButtons='true'
      first
      />

     <Item 
      title='MODEL S'
      desc='Money-back guarantee'
      descLink=''
      backgroundImg={ModelS}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='EXISTING INVENTORY'
      rightBtnLink=''
      twoButtons='true'
      />

     <Item 
      title='MODEL 3' 
      desc='Money-back guarantee'
      descLink=''
      backgroundImg={Model3}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='EXISTING INVENTORY'
      rightBtnLink=''
      twoButtons='true'
      />

     <Item 
      title='MODEL X'
      desc='Money-back guarantee'
      descLink=''
      backgroundImg={ModelX}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='EXISTING INVENTORY'
      rightBtnLink=''
      twoButtons='true'
      />   

      <Item 
      title='MODEL Y'
      desc='Money-back guarantee'
      descLink=''
      backgroundImg={ModelY}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='EXISTING INVENTORY'
      rightBtnLink=''
      twoButtons='true'
      />
      
      <Item 
      title='Solar for new Roofs'
      desc='Money-back guarantee'
      descLink=''
      backgroundImg={SolarRoof}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='EXISTING INVENTORY'
      rightBtnLink=''
      twoButtons='true'
      />

     <Item 
      title='Accessories'
      desc='Money-back guarantee'
      descLink=''
      backgroundImg={Accessories }
      leftBtnTxt='SHOP NOW'
      leftBtnLink=''
      rightBtnTxt='EXISTING INVENTORY'
      rightBtnLink=''
  
      />
    </div>
    </div>
  );
}

export default App;
