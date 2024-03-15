import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

interface InputTextInterface {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  name: string;
}
const InputText: React.FC<InputTextInterface> = ({
  title,
  name,
  handleChange,
}) => {
  return (
    <div className="sm:col-span-2 block items-center sm:flex ">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 mr-3  ml-auto">
        {title} :
      </label>
      <div className="mt-2">
        <input
          onChange={handleChange}
          type="text"
          name={name}
          id={name}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

interface InputCheckBoxInterface {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  name: string;
}
const InputCheckBox: React.FC<InputCheckBoxInterface> = ({
  title,
  name,
  handleChange,
}) => {
  return (
    <div className="sm:col-span-2 block items-center sm:flex mt-2">
      <div className=" ml-auto">
        <input
          onChange={handleChange}
          type="checkbox"
          name={name}
          id={name}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>

      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 ml-3 ">
        {title}
      </label>
    </div>
  );
};

interface InputNumberInterface {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  name: string;
  placeholder: string;
}
const InputNumber: React.FC<InputNumberInterface> = ({
  title,
  name,
  handleChange,
  placeholder,
}) => {
  return (
    <div className="sm:col-span-2 block items-center sm:flex ">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 mr-3 ml-auto">
        {title} :
      </label>
      <div className="flex rounded-md shadow-sm mt-2 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
          $
        </span>
        <input
          type="number"
          name={name}
          onChange={handleChange}
          id={name}
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

interface InputDateInterface {
  handleChange: (event: any) => void;
  title: string;
  name: string;
}
const InputDate: React.FC<InputDateInterface> = ({
  title,
  name,
  handleChange,
}) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
    handleChange({ value: newValue.startDate, name: name });
  };

  return (
    <div className="sm:col-span-2 block items-center sm:flex max-w-max ">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 mr-3 ml-auto">
        {title} :
      </label>
      <div className="mt-2">
        <Datepicker
          inputClassName=" w-full inline  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          useRange={false}
          asSingle={true}
          value={value}
          onChange={handleValueChange}
        />
      </div>
    </div>
  );
};

export { InputText, InputNumber, InputDate, InputCheckBox };
