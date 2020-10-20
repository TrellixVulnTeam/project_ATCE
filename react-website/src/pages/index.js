import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix } from '../components/InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <HeroSection></HeroSection>
            <InfoSection {...homeObjOne}></InfoSection>
            <InfoSection {...homeObjTwo}></InfoSection>
            <InfoSection {...homeObjThree}></InfoSection>
            <InfoSection {...homeObjFour}></InfoSection>
            <InfoSection {...homeObjFive}></InfoSection>
            <InfoSection {...homeObjSix}></InfoSection>
        </>
    );
};

export default Home;
