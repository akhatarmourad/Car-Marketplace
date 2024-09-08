import { Checkbox } from "@/components/ui/checkbox";


interface Item {
    label?: string;
    name?: string;
    fieldType?: string;
}

type handleFeaturesChangeType = (name?: string, value?: string | number | boolean) => void;

const CheckboxField = ({ item, handleFeaturesChange } : {item?: Item; handleFeaturesChange: handleFeaturesChangeType}) => {
    return (
        <div>
            <Checkbox name={item?.name} onCheckedChange={(value) => handleFeaturesChange(item?.name, value)} />
            <span className="ps-3 text-slate-600">{item?.label}</span>
        </div>
    );
}

export default CheckboxField;