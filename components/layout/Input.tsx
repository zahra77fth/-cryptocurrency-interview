import React, { ChangeEvent } from "react";

interface InputProps {
    label: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, onChange, placeholder }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        value = value.replace(/\D/g, "");
        event.target.value = value;
        onChange(event);
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-[--text-color]">
                {label}
            </label>
            <input
                onChange={handleChange}
                placeholder={placeholder}
                className="mt-1 block w-full px-3 py-2 bg-[--primary-bg] focus:border-[--primary] border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            />
        </div>
    );
};

export default Input;
