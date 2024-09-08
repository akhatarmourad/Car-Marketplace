import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfosSection from "@/components/InfosSection";
import PopularCars from "@/components/PopularCars";

const Home = () => {
    return (
        <header className="select-none">
            {/* Header */}
            <Header />

            {/* Hero */}
            <Hero />

            {/* Categories */}
            <Categories />

            {/* Most Searched Cars */}
            <PopularCars />

            {/* Infos Section */}
            <InfosSection />

            {/* Footer */}
            <Footer />
        </header>
    );
}

export default Home;