import CarSearch from "@/data/CarSearch";

const Categories = () => {
    return (
        <div className="px-16 py-20 bg-gradient-to-t from-indigo-50 to-white mt-40">
            <h2 className="text-center md:text-4xl text-3xl font-bold mb-12">
                Car <span className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-transparent bg-clip-text">Categories</span>
            </h2>

            {/* Categories */}
            <div className="flex flex-wrap items-center justify-center gap-10">
                {
                    CarSearch.Categories.map((category) => {
                        return (
                            <div key={category.id} className="bg-white bg-opacity-65 border border-indigo-100 px-8 py-5 rounded-2xl hover:shadow-sm transition-all cursor-pointer">
                                <img src={category.icon} alt="Category Icon" />
                                <p className="text-center">{category.name}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Categories;