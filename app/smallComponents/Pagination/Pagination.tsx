const Pagination = (props: { current: number; total: number; Change: any }) => {
  return (
    <div className=" min-w-full p-3  ">
      <div className="flex max-w-screen-lg m-auto">
        <button
          onClick={() => props?.Change(props?.current - 1)}
          disabled={props?.current < props?.total}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-1 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Back
        </button>

        <p className="m-auto ">
          Page {props?.current} of {props?.total}
        </p>
        <button
          onClick={() => props?.Change(props?.current + 1)}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-1 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          {props?.current === props?.total ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};
export default Pagination;
