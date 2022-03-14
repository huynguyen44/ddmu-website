import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Container, MainHeading} from '../../globalStyles';
import {HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton} from './HeroStyles'

const Hero = () => {
  return (
    <HeroSection>
        <HeroVideo src="./assets/Dji 0048.mp4" autoPlay muted loop/>
        <Container>
            <MainHeading>
            Đoàn TNTT Đaminh Úy
            </MainHeading>
            <HeroText>
                Come See What We're About
            </HeroText>
            <ButtonWrapper>
                <Link to="signup">
                    <Button>Get Started</Button>
                </Link>
                <HeroButton>Find Out More</HeroButton>
            </ButtonWrapper>
        </Container>
    </HeroSection>
  );
}

export default Hero