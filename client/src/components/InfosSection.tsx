const InfosSection = () => {
  return (
    <section>
      <div className="p-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-gradient-to-t from-indigo-100 to-white">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="./luxuryCar.png"
              className="absolute inset-0 scale-x-[-1]"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Find Your Drea Car
            </h2>

            <p className="mt-4 text-gray-600">
              In our online marketplace your find the car you are dreaming about in just few minutes, with high quality & surety.
              Don't worry, we are here to serve and help you get the right car from the right place !
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfosSection;
