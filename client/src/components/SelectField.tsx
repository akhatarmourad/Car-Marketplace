import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Item {
    label?: string;
    name?: string;
    fieldType?: string;
    required?: boolean;
    options?: Array<string>;
}

type handleInputChangeType = (name?: string, value?: string | number | boolean) => void;

const SelectField = ({ item, handleInputChange } : {item?: Item; handleInputChange: handleInputChangeType}) => {
  return (
    <Select onValueChange={(value) => handleInputChange(item?.name, value)}>
      <SelectTrigger>
        <SelectValue placeholder={item?.label} />
      </SelectTrigger>
      <SelectContent>
        {
            item?.options?.map((option, index) => (
                <SelectItem value={option} key={index}>{option}</SelectItem>
            ))
        }
      </SelectContent>
    </Select>
  );
};

export default SelectField;
