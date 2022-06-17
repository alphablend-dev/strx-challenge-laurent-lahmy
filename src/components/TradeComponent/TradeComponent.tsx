import Amount from "./Amount";
import BuySell from "./BuySell";

const BuyButton = ({}) => {
  return (
    <div
      id="BuyButton"
      className=""
      {...{
        style: {},
      }}
    />
  );
};
const TradeBox = ({}) => {
  return (
    <div
      id="TradeBox"
      className=""
      {...{
        style: {},
      }}
    />
  );
};
const Wallet = ({}) => {
  return (
    <div
      id="Wallet"
      className=""
      {...{
        style: {},
      }}
    />
  );
};
const TradeGrid = ({}) => {
  return (
    <div
      id="TradeGrid"
      className="p-5 w-full h-full"
      {...{
        style: {
          display: "grid",
          gridTemplate: `
            "buy-sell"
            "amount"
            "wallet"
            "tradeBox"
            "buyButton"
          `,
        },
      }}
    >
      <BuySell />
      <Amount />
      <Wallet />
      <TradeBox />
      <BuyButton />
    </div>
  );
};

const TradeComponent = ({}) => {
  return (
    <div
      id="TradeComponent"
      className="flex justify-center items-center w-[380px] h-[455px] bg-white rounded-xl border text-gray-4 border-gray-6 mb-4"
      {...{
        style: {},
      }}
    >
      {/* <div id="" className="bg-red-1 h-full w-full" {...{ style: {} }} /> */}
      <TradeGrid />
    </div>
  );
};

export default TradeComponent;
