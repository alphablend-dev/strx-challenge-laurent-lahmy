const Amount = ({}) => {
  return (
    <div
      id="Amount"
      className="text-gray-1 font-normal"
      {...{
        style: {
          display: "grid",
          gridTemplate: `
          "symbol value"
        `,
          alignContent: "center",
          justifyContent: "center",
          color: "#191919",
          // letterSpacing: "-0.03em",
        },
      }}
    >
      <div
        className=""
        {...{
          style: {
            fontSize: "28px",
          },
        }}
      >
        $
      </div>
      <div
        {...{
          style: {
            fontSize: "46px",
          },
        }}
      >
        0
      </div>
    </div>
  );
};

export default Amount;
