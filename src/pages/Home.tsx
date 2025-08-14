import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import Card from "../components/Card";
import Footer from "../components/Footer";
import type React from "react";

const Home: React.FC = () => {
    return (
        <>
        <Navbar />
        <HeroSection
        title="Anida Dedelay"
        subtitle="Best healthy salad served in our restaurant"
        buttonLabel="Learn More"
        imageUrl="/images/bowl.png"
        />
        <Section
        title="Orange Benefit"
        description="Just reogine eseds and summer in golled quasiunp."
        buttonLabel="Learn More"
        leftImage="images/orange.png"
        rightImage="/images/juice.png"
        />
        <div className="card-grid">
            <Card imageUrl="/images/oranges.jpg" title="ARCU VOLUT FAT VITAE" description="Phestiers 1geart" />
            <Card imageUrl="/images/orange-slice.jpg" title="$19,99,90.99E" description="Orviste past bronps" />
            <Card imageUrl="/images/berries.jpg" title="SFIELY TUN DRENARD" description="Ongand suniers" />
        </div>
        <Footer />
        </>
    );
};

export default Home;