const Navigation = (props: { bgColor: string; name: string }) => {
  const isDarkColor = (color: string) => {
    const rgb = parseInt(color.substring(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    // محاسبه روشنایی بر اساس روشنایی رنگ‌ها
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    props?.bgColor && (
      <nav
        className="bg-gray-500 min-w-full p-3 "
        style={{ backgroundColor: props?.bgColor }}>
        <b
          className={classNames(
            isDarkColor(props?.bgColor) ? "text-white" : "text-black",
            "max-w-screen-lg m-auto block"
          )}>
          New project {props?.name && " - " + props?.name}
        </b>
      </nav>
    )
  );
};
export default Navigation;
