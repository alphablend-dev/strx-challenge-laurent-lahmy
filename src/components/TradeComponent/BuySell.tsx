const BuySell = ({}) => {
  return (
    <div
      id="BuySell"
      className="space-x-[16px] font-medium"
      {...{
        style: {},
      }}
    >
      <div
        id=""
        className=""
        {...{
          style: {
            display: "grid",
            gridTemplate: `
        "buy sell ."
        / auto auto 1fr
      `,
          },
        }}
      >
        <div
          id=""
          className=""
          {...{
            style: {
              display: "grid",
              gridTemplate: `
        "text"
        "line"
      `,
            },
          }}
        >
          <div id="" className="text-gray-1" {...{ style: {} }}>
            Buy
          </div>
          <div
            id="line"
            className="h-[2px] bg-gray-1 mt-[2px] rounded"
            {...{ style: {} }}
          />
        </div>
      </div>
    </div>
  );
};

export default BuySell;
