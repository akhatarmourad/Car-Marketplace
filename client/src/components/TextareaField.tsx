import { Textarea } from "@/components/ui/textarea"

interface Item {
    label?: string;
    name?: string;
    fieldType?: string;
    required?: boolean;
    column?: number;
    icon?: string;
}

type handleInputChangeType = (name?: string, value?: string | number | boolean) => void;

const TextareaField = ({ item, handleInputChange } : {item?: Item; handleInputChange: handleInputChangeType}) => {
    return (
        <Textarea name={item?.name} onChange={(event) => handleInputChange(item?.name, event?.target.value)} required={item?.required} placeholder={item?.label} />
    );
}

export default TextareaField;