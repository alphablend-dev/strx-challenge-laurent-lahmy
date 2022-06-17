import Amount from "./Amount";
import BuyButton from "./BuyButton";
import BuySell from "./BuySell";
import TradeBox from "./TradeBox";
import Wallet from "./Wallet";

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
            "amount" 1fr
            "wallet"
            "tradeBox"
            "buyButton"
          `,
          gap: "10px",
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
