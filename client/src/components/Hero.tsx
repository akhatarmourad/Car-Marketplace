import Search from "./Search";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from "react";

const Hero = () => {
    const ref = useRef<HTMLDivElement>(null);

    // Get scrollYProgress based on the target ref
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    // Transform scroll progress to horizontal translation
    const xTransform = useTransform(scrollYProgress, [0, 1], ['100vw', '0vw']);

    return (
        <div className="flex flex-col items-center gap-16 pt-24 w-full h-[85vh] bg-gradient-to-b from-indigo-50 from-60% to-white">
            {/* Main Text */}
            <div className="md:w-2/3">
                <h1 className="font-bold lg:text-6xl md:text-4xl sm:text-3xl text-xl text-center leading-loose">
                    Your Trusted Platform for <span className="bg-gradient-to-tr from-indigo-600 to-indigo-300 text-transparent bg-clip-text">Buying and Selling</span> Cars
                </h1>
            </div>

            {/* Search */}
            <Search />

            {/* Image */}
            <motion.section
                ref={ref}
            >
                <img src='./blueCar.png' alt='Blue Car' />
            </motion.section>
        </div>
    );
}

export default Hero;
