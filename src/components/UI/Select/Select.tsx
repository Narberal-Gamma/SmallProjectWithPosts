import { FC } from "react";
import Form from 'react-bootstrap/Form';

interface OptionProps {
    value: string,
    name: string,
}

interface SelectProps {
    options: OptionProps[],
    defaultValue: string,
    value: string,
    onChange: (event: string) => void,
    disabled?: boolean,
}

const Select: FC<SelectProps> = ({ defaultValue, options, value, onChange }) => {
    return (
        <Form.Select
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.name}
                </option>
            )}
        </Form.Select>
    )
}

export default Select