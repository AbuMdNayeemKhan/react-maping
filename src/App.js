import React from 'react';
import Card from './components/card';
import Data from './Data.json';

function App(){
  let items = [];
  // for( let x = 0; x < Data.length; x++ ){
  //   items.push(<Card titleText = {Data[x].name} disText = {Data[x].age}/>);
  // }

  items = Data.map((item, index) => <Card key={index} titleText={item.name} disText={item.age}/>);

  return <div>
            <h1 className='headingStyle'>To Do App</h1>
            {items}
          </div>
}

export default App;