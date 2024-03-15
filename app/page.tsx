"use client";
import { useBeforeUnload, useToggle } from "react-use";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import Navigation from "./components/Navigation/Navigation";
import React, { useEffect, useRef, useState } from "react";
import Pagination from "./smallComponents/Pagination/Pagination";
import FinishPage from "./components/FinishPage/FinishPage";

export default function Home() {
  const [inputs, setInputs] = useState<any>();
  const [pageCurrent, setPageCurrent] = useState<number>(1);

  const [dirty, toggleDirty] = useToggle(true);
  useBeforeUnload(dirty, "You have unsaved changes, are you sure?");

  return (
    <main className="min-h-screen">
      <Navigation bgColor={inputs?.bgColor} name={inputs?.name} />

      <div className="  max-w-screen-lg m-auto p-3 min-h-96">
        <CustomerForm onChange={setInputs} show={pageCurrent === 1} />
        <FinishPage data={inputs} show={pageCurrent === 2} />
      </div>
      <Pagination
        current={pageCurrent}
        total={2}
        Change={(x: number) => {
          x > 2 ? toggleDirty(true) : setPageCurrent(x);
          toggleDirty(false);
        }}
      />
    </main>
  );
}
