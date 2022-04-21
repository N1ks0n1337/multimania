import React from 'react';
import './styled/null.css'
import Header from './blocks/header/Header'
import OurStory from './blocks/ourStory/OurStory';
import Collectibles from './blocks/collectibles/Collectibles';
import LearnMore from './blocks/learnMore/LearnMore';
import Footer from './blocks/footer/Footer';
import Roadmap from './blocks/roadmap/Roadmap';
import styled from 'styled-components';
import Fighters from './blocks/fighters/Fighters';
import backgroundOut from './blocks/fighters/backgroundOut.png'
import Works from './blocks/works/Works'

function App() {
  return (
    <div className="App">
      <Header/>
      <OurStory/>
      <Fighters/>
      <Collectibles/>
      <Roadmap/>
      <LearnMore/>
      <Footer/>
    </div>
  );
}

export default App;