"use client";
import {
  InputCheckBox,
  InputDate,
  InputNumber,
  InputText,
} from "@/app/smallComponents/InputsCustom/InputsCustom";
import React, { useEffect, useState } from "react";

interface CustomerFormProps {
  onChange: any;
  show: boolean;
}

interface inputsInterface {
  name: string;
  date: string | null;
  salary: number;
  shares: number;
  frist: boolean;
  bgColor: string;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ onChange, show }) => {
  const [inputs, setInputs] = useState<inputsInterface>({
    name: "",
    date: "",
    salary: 0,
    shares: 0,
    frist: false,
    bgColor: "#13a8cd",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values: inputsInterface) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    console.log(inputs);
    onChange(inputs);
  }, [inputs]);
  return (
    <div style={{ display: show ? "block" : "none" }}>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Customer Form
      </h2>

      <div className="mt-1 grid grid-cols-1 gap-x-1 gap-y-1 sm:grid-cols-1">
        <div className="max-w-max">
          <InputDate
            title="Meeting date"
            handleChange={(x) => {
              setInputs((values: inputsInterface) => ({
                ...values,
                [x.name]: x.value,
              }));
            }}
            name="date"
          />

          <InputText title="Name" handleChange={handleChange} name="name" />

          <InputCheckBox
            title="Frist time user"
            handleChange={(x) => {
              setInputs((values: inputsInterface) => ({
                ...values,
                [x.target.name]: x.target.checked,
              }));
            }}
            name="frist"
          />
        </div>
        <div className="max-w-max">
          <InputNumber
            title="Salary"
            handleChange={handleChange}
            name="salary"
            placeholder="20000"
          />

          <InputNumber
            title="Shares"
            handleChange={handleChange}
            name="shares"
            placeholder="5000"
          />
        </div>
        <div className="sm:col-span-2 mt-5">
          <p className="block text-sm font-medium leading-6 text-gray-900">
            Application colour scheme :
          </p>

          <div className="mt-2">
            <input
              onChange={handleChange}
              type="color"
              className=" h-0 w-0  ml-6 "
              id="hs-color-input"
              title="Choose your color"
              value={inputs?.bgColor}
              name="bgColor"
            />
            <label
              htmlFor="hs-color-input"
              className="block text-sm font-medium leading-6 text-gray-900">
              <span
                className="  items-center  h-8 w-8 rounded-full -mt-10 ml-2 block px-2 py-1 text-xs font-medium z-10 absolute ring-3 ring-inset ring-gray-800"
                style={{ backgroundColor: inputs?.bgColor }}></span>
              <p className="mt-5">banner</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerForm;
