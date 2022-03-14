import React from 'react'
import { Content } from '../components/Content/Content';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree, heroFour, heroFive } from '../data/HeroData';

//Hero Feature COntent Carousel

const Home = () => {
  return (
  <>
    <Hero/>
    <Content {...heroOne} />
    <Content {...heroTwo} />
    <Content {...heroThree} />
    <Content {...heroFour} />
    <Content {...heroFive} />
  </>
  );
}

export default Home