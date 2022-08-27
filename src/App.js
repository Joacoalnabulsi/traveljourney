import React from "react";
import Navbar from './components/header.js';
import Main from './components/Main.js';
import data from './data';
function App() {
  const cards = data.map(item =>{ 
    return (
      <Main
          key={item.id}
              {...item}
       />
      )
    })
  return (<div>
    <Navbar />
    <section className='places-cards'>
     {cards}
          </section>
    </div>
  );
}

export default App;
