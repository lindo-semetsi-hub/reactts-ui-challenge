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
            buttonLabel="Leran More"
            imageUrl="/image/bowl.png"
        />
        <Section
            title="Orange Benefit"
            description="Just recognize seeds and summer in golden sunshine"
            buttonLabel="Learn More"
            leftImage="/images/juice.png"
            rightImage="/images/berries.png"
        />
        <div className="card-grid">
            <Card imageUrl="/images/oranges.jpg" title="Arcu Volut Fat Vitae"
 description="Phasellus eget"/>        
            <Card imageUrl="images/oranges-slice.jpg" title="$19.99" description="Ornate past bronps."
/>
            <Card imageUrl="images/berries.jpg" title="Sfiely Tun Drendard" description="Ornagd sunliers" />
 </div>
        <Footer />
        </>
    );
};

export default Home;