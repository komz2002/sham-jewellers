import React from 'react';
import Hero from './Herosection/Hero';
import Card from "./Cardsection/Card";
import Latest from "./Latestsection/Latest";
import Saga from "./Sagasection/Saga";
import All from "./AllSection/All";
import Last from "./Lastsection/Last";

function Home() {
  return (
    <div>
      <Hero />
      <Card/>
      <Latest/>
      <Saga/>
      <All/>
      <Last/>
    
    </div>
  );
}

export default Home;