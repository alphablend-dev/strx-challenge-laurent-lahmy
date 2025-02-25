import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Amount from "./Amount";
import AssetSelection from "./AssetSelection";
import BuyButton from "./BuyButton";
import BuySell from "./BuySell";
import TradeBox from "./TradeBox";
import Wallet from "./Wallet";

const TradeGrid = ({ buySet }) => {
  return (
    <div
      id="TradeGrid"
      className="p-5 w-[380px] min-w-[380px] h-[455px]"
      {...{
        style: {
          display: "grid",
          placeSelf: "start",
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
      <TradeBox {...{ buySet }} />
      <BuyButton />
    </div>
  );
};

const TradeComponent = ({}) => {
  // buy state
  const [buy, buySet] = useState(false);
  const { marginLeft } = useSpring({
    marginLeft: buy ? "-100%" : "0%",
    config: {
      precision: 0.000000001,
    },
  });
  const { height } = useSpring({
    height: buy ? "700px" : "455px",
    config: {
      precision: 0.000000001,
    },
  });

  return (
    <animated.div
      id="TradeComponent"
      className="flex justify-center items-center bg-white rounded-xl border text-gray-4 border-gray-6 mb-4 overflow-hidden"
      {...{
        style: {
          height,
          justifyContent: "flex-start",
        },
      }}
    >
      <animated.div
        id="swipe-container"
        className="flex w-[380px] h-full"
        {...{
          style: {
            marginLeft,
          },
        }}
      >
        <TradeGrid {...{ buySet }} />
        <AssetSelection {...{ buySet }} />
      </animated.div>
    </animated.div>
  );
};

export default TradeComponent;
