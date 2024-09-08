import { useState } from 'react';
import Header from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import carDetailsForm from '../data/carDetailsForm.json';
import CarFeatures from '../data/features.json';
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import TextareaField from "@/components/TextareaField";
import CheckboxField from "@/components/CheckboxField";
import { Button } from "@/components/ui/button";
import { db } from '../../configs/index';
import { Car } from '../../configs/schema';
import UploadImages from '@/components/UploadImages';

const CreateListing = () => {

    const [data, setData] = useState();
    const [features, setFeatures] = useState();
    const [triggerUploadImages, setTriggerUploadImages] = useState();

    const handleInputChange = (name?: string, value?: string | number | boolean) => {
        setData((previousData) => {
            return {...previousData, [name]:value}
        });

        console.log(data);
    }

    const handleFeaturesChange = (name?: string, value?: string | number | boolean) => {
        setFeatures((previousData) => {
            return {...previousData, [name]:value}
        });
    }

    // On Submit
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        try {
            const result = await db.insert(Car).values({...data, features:features}).returning({id: Car.id});
            if(result) console.log("Inserted Successfully");
            setTriggerUploadImages(result[0]?.id);
        }
        catch(error) {
            console.log(error);
        }
    
    }

    return (
        <div>
            <Header />

            <div className="p-14">
                <p className="font-bold font-montserrat md:text-3xl text-2xl">Insert a new Car</p>

                <div className="border border-indigo-100 p-5 rounded-lg mt-5">
                    <form>
                        {/* Car Details */}
                        <div>
                            <p className="text-xl font-montserrat font-medium mb-5 text-slate-700">Car Details</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {
                                    carDetailsForm.carDetails.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                {
                                                    item?.fieldType === 'text' || item?.fieldType === 'number'? 
                                                    <InputField item={item} handleInputChange={handleInputChange} /> : item?.fieldType === 'dropdown' ?
                                                    <SelectField item={item} handleInputChange={handleInputChange} /> : item?.fieldType === 'textarea' ?
                                                    <TextareaField item={item} handleInputChange={handleInputChange} /> : null
                                                }
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>

                        <Separator className="my-8" />

                        {/* Car Features */}
                        <div>
                            <p className="text-xl font-montserrat font-medium mb-5 text-slate-700">Car Features</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                                {
                                   CarFeatures.features.map((feature, index) => (
                                        <CheckboxField item={feature} key={index} handleFeaturesChange={handleFeaturesChange} />
                                    ))
                                }
                            </div>
                        </div>

                        <Separator className="my-8" />

                        {/* Car Photos */}
                        <div>
                            <p className="text-xl font-montserrat font-medium mb-5 text-slate-700">Car Photos</p>
                            <UploadImages />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <Button onClick={(event) => handleSubmit(event)} className="bg-indigo-600 hover:bg-indigo-500">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateListing;