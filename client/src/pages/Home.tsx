import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
        </header>
    );
}

export default Home;