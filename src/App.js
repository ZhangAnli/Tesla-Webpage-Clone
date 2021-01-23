import './App.css';
import Header from './components/Header'

import Accessories from "./assets/Desktop-Accessories.jpg"
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Item from './components/Item';

function App() {
  return (
    <div className="App">

      <Header/>
      <div className="app__itemsContainer">
        <Item
          id="test"
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnText='ORDER NOW'
          leftBtnLink="https://www.tesla.com/energy/design"
          rightBtnText="LEARN MORE"
          rightBtnLink='https://www.tesla.com/solarpanels'
          twoButtons="true"
          first
        />
        <Item
          title="Model S"
          desc="Starting at $69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink="https://www.tesla.com/energy/design"
          rightBtnText="LEARN MORE"
          rightBtnLink='https://www.tesla.com/inventory/new/ms'
          twoButtons="true"
          first
        />
        <Item
          title="Model-3"
          desc="Order online for Touchless Delivery"
          descLink=""
          backgroundImg={Model3}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink="https://www.tesla.com/energy/design"
          rightBtnText="LEARN MORE"
          rightBtnLink=''
          twoButtons="true"
          first
        />
        <Item
          title="Model-X"
          desc="Order online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelX}
          leftBtnText='ORDER NOW'
          leftBtnLink="https://www.tesla.com/energy/design"
          rightBtnText="LEARN MORE"
          rightBtnLink=''
          twoButtons="true"
          first
        />
        <Item
          title="Model-Y"
          desc="Order online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelY}
          leftBtnText='ORDER NOW'
          leftBtnLink="https://www.tesla.com/energy/design"
          rightBtnText="LEARN MORE"
          rightBtnLink=''
          twoButtons="true"
          first
        />
        <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnText='ORDER NOW'
          leftBtnLink="https://www.tesla.com/energy/design"
          rightBtnText="LEARN MORE"
          rightBtnLink=''
          twoButtons="true"
          first
        />
        <Item
          title="Accessories"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={Accessories}
          leftBtnText='ORDER NOW'
          leftBtnLink="https://www.tesla.com/energy/design"
          rightBtnText="LEARN MORE"
          rightBtnLink=''
          twoButtons="true"
          first
        />
      </div>
    </div>
  );
}

export default App;
