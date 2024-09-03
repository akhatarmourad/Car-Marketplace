import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

import { Separator } from "@/components/ui/separator";
import CarSearch from "@/data/CarSearch";
import { IoSearchOutline } from "react-icons/io5";


const Search = () => {
    return (
        <div className="bg-white p-2 md:p-4 flex flex-col md:flex-row items-center rounded-m md:rounded-xl gap-5">
            <Select>
                <SelectTrigger className="w-[180px] outline-none border-none shadow-none">
                    <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">New</SelectItem>
                    <SelectItem value="dark">Old</SelectItem>
                </SelectContent>
            </Select>

            <Separator orientation="vertical" className="hidden md:block" />

            <Select>
                <SelectTrigger className="w-[180px] outline-none border-none shadow-none">
                    <SelectValue placeholder="Maker" />
                </SelectTrigger>
                <SelectContent>
                    {
                        CarSearch.Makers.map((maker) => (
                            <SelectItem key={maker.id} value={maker.name}>{maker.name}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>

            <Separator orientation="vertical" className="hidden md:block" />

            <Select>
                <SelectTrigger className="w-[180px] outline-none border-none shadow-none">
                    <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                    {
                        CarSearch.Pricing.map((price) => {
                            return (
                                <SelectItem key={price.id} value={price.amount.toString()}>{price.amount}</SelectItem>
                            );
                        })
                    }
                </SelectContent>
            </Select>

            <IoSearchOutline className="text-2xl text-primary cursor-pointer hover:scale-105 transition-all" />
        </div>

    );
}

export default Search;