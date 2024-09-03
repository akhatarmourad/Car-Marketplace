import randomCars from "@/data/randomCars";
import CarItem from "./CarItem";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

  
const PopularCars = () => {
    return (
        <div className="px-16 py-20 bg-gradient-to-b from-indigo-50 to-white pt-28">
            <h2 className="text-center md:text-4xl text-3xl font-bold mb-12">
                <span className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-transparent bg-clip-text">Most Searched</span> Cars
            </h2>
            
            {/* Cars */}
            <div>
                <Carousel>
                    <CarouselContent>
                        {
                            randomCars.carsList.map((car, index) => {
                                return (
                                    <CarouselItem key={index} className="lg:basis-1/4 md:basis-1/3 sm:basis-1/2">
                                        <CarItem car={car} index={index} />
                                    </CarouselItem>
                                );
                            })
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}

export default PopularCars;