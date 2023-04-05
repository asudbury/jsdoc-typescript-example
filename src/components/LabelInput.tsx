/**
 @module Components
*/

import React from 'react';
import { Input  } from 'antd';

/**
    Props for the LabelInput component.
    @Category Components
    @typedef {Object} LabelInputProps
    @property {string} label - The label for the input.
    @property {string} name - The name of the input.
    @property {any} value - The current value of the input.
    @property {function} onChange - A function that will be called when the input value changes.
    @property {Object} inputProps - Optional additional props to pass to the input component.
    @property {RegExp} regEx - Optional regular expression pattern to validate input value.
*/
export interface LabelInputProps {
    label: string;
    name: string;
    value: any;
    onChange: (value: any, name: string) => void;
    inputProps?: React.ComponentProps<typeof Input>;
    regEx?: RegExp;
}

/**
    A reusable label and input component
    @Category Components
    @param {LabelInputProps} props - Component props
    @returns {JSX.Element} - Returns a JSX Element with the label and input field
*/
const LabelInput = ({ label, value, name, onChange, regEx, inputProps }: LabelInputProps)  => {

    const handleInputChange = async (event: any, name: string) => {

        const value = event.target.value;

        if (regEx && value) {
            const isValid = regEx.test(event.target.value);

            if (!isValid) {
                event.preventDefault();
                return;
            }
        }

        onChange(event.target.value, name);
    };

    return (
        <div>
            <span style={{fontSize: '15px', color: '#C9CAD8'}}>{label}</span>
            <Input style={{ height: 44 }} value={value} onChange={(e) => handleInputChange(e, name)} {...inputProps}  />
        </div>
    );
};

export default LabelInput;


