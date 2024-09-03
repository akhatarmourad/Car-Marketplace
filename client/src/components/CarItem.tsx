import { IoSpeedometer } from "react-icons/io5";
import { SiFueler } from "react-icons/si";
import { BsFillGearFill } from "react-icons/bs";
import { GoEye } from "react-icons/go";
import { Separator } from "@/components/ui/separator";

interface Car {
    name: string;
    fuelType: string;
    model: string;
    type: string;
    milles: number;
    gearType: string;
    price: string;
    category: string;
}

const CarItem = ({ car, index }:{car: Car; index: number}) => {
    return (
        <div className="bg-slate-100 border border-indigo-100 rounded-xl">
            <div className="w-full h-32 relative p-4">
                <img src={`${index + 1}.png`} alt='Car' className='object-cover object-center' />
                <span className={`${car.category === "Old" ? 'bg-slate-700' : 'bg-indigo-700'} absolute top-2 left-3 text-white px-2 py-['3px'] rounded-lg text-sm font-medium`}>{car.category}</span>
            </div>

            {/* Details */}
            <div className="p-4">
                <h2 className="text-gray-900 font-bold">{car.name}</h2>
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                    <div className="flex-column">
                        <SiFueler size={23} className="text-slate-700" />
                        <span className="text-slate-600">{car.fuelType}</span>
                    </div>
                    <div className="flex-column">
                        <IoSpeedometer size={23} className="text-slate-700" />
                        <span className="text-slate-600">{car.milles}</span>
                    </div>
                    <div className="flex-column">
                        <BsFillGearFill size={23} className="text-slate-700" />
                        <span className="text-slate-600">{car.gearType}</span>
                    </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center">
                    <p className="font-bold text-lg">{car.price}$</p>
                    <div className="text-slate-500 flex items-center gap-2 border border-indigo-200 px-2 py-1 rounded-lg cursor-pointer hover:shadow-sm transition-all">View Details <GoEye size={20} /></div>
                </div>
            </div>
        </div>
    );
}

export default CarItem;