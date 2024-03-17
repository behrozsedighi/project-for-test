const FinishPage = (props: any) => {
  function convertDateFormat(inputDate: string) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const parts = inputDate.split("-");
    const year = parts[0];
    const month = months[parseInt(parts[1]) - 1];
    const day = parseInt(parts[2]);

    return `${day} ${month} ${year}`;
  }
  return (
    <div style={{ display: props?.show ? "block" : "none" }}>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Customer Brief
      </h2>

      <p className="mt-4">
        We meet {props?.data?.name} on{" "}
        {props?.data?.date && convertDateFormat(props?.data?.date)}
      </p>
      <p className="mt-4">
        He was {props?.data?.frist !== true && "not"} a frist time user of the
        system
      </p>
      <p className="mt-4">
        he demonstrated a portfolio value of{" "}
        {parseInt(props?.data?.salary) + parseInt(props?.data?.shares)} dollars
      </p>
    </div>
  );
};
export default FinishPage;
