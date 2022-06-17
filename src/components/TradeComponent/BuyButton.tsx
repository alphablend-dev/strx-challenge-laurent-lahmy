const BuyButton = ({}) => {
  return (
    <div
      id="BuyButton"
      className="h-[57px] w-full rounded-lg text-white text-body-2 font-medium"
      {...{
        style: {
          background: "#191919",
          letterSpacing: "-0.01em",
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      Buy BTC
    </div>
  );
};

export default BuyButton;
