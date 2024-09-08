import { Input } from "@/components/ui/input";

interface Item {
    label?: string;
    name?: string;
    fieldType?: string;
    required?: boolean;
    column?: number;
    icon?: string;
}

type handleInputChangeType = (name?: string, value?: string | number | boolean) => void;

const InputField = ({ item, handleInputChange } : {item?: Item; handleInputChange: handleInputChangeType}) => {
    return (
        <Input 
            type={item?.fieldType}
            name={item?.name}
            placeholder={item?.label}
            required={item?.required}
            onChange={(event) => handleInputChange(item?.name, event.target.value)} 
        />
    );
}

export default InputField;