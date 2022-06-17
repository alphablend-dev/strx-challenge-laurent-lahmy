import { useState } from "react";

const BorderAndSwapButton = ({}) => {
  return (
    <>
      <div
        id=""
        className="w-full border-b border-gray-6"
        {...{ style: { gridArea: "center" } }}
      />
      <div
        id=""
        className="w-[40px] h-[40px] bg-gray-8 rounded-full grid justify-center content-center border-[3px] border-white"
        {...{
          style: {
            gridArea: "center",
            placeSelf: "center end",
            marginRight: "55px",
          },
        }}
      >
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 4L3.5 1L6 4" stroke="#191919" strokeLinecap="round" />
          <path
            d="M4 1C4 0.723858 3.77614 0.5 3.5 0.5C3.22386 0.5 3 0.723858 3 1H4ZM3 11C3 11.2761 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.2761 4 11H3ZM3 1L3 11H4L4 1H3Z"
            fill="#191919"
          />
          <path
            d="M8 12L10.5 15L13 12"
            stroke="#191919"
            strokeLinecap="round"
          />
          <path
            d="M11 15C11 15.2761 10.7761 15.5 10.5 15.5C10.2239 15.5 10 15.2761 10 15H11ZM10 5C10 4.72386 10.2239 4.5 10.5 4.5C10.7761 4.5 11 4.72386 11 5H10ZM10 15V5H11V15H10Z"
            fill="#191919"
          />
        </svg>
      </div>
    </>
  );
};

const TradeBoxLine = ({ instruction, currency, gridArea, id, buySet }) => {
  // hover
  const [hover, setHover] = useState(false);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={`h-full cursor-pointer ${hover ? `bg-gray-8` : ``}`}
      style={{
        gridArea,
        display: "grid",
        gridTemplate: `
             "instruction currency . arrow"
             / 84px auto 1fr auto
           `,
        columnGap: "20px",
        placeItems: "center start",
      }}
      {...{
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        onClick: () => {
          if (id === "Buy") {
            buySet(true);
          }
        },
      }}
    >
      <div id="" className="pl-4" {...{ style: {} }}>
        {instruction}
      </div>
      <div
        id=""
        className=""
        {...{
          style: {
            display: "grid",
            gridTemplate: `
      "checkbox currency"
    `,
            gap: "6px",
          },
        }}
      >
        <div className="h-5 w-5 border border-gray-6 rounded-full bg-white" />
        <div>{currency}</div>
      </div>
      <div />
      <div id="" className="pr-4" {...{ style: {} }}>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L8 8L1 15" stroke="#191919" />
        </svg>
      </div>
    </div>
  );
};

const TradeBox = ({ buySet }) => {
  return (
    <div
      id=""
      className=""
      {...{
        style: {
          display: "grid",
          gridTemplate: `
      "center"
    `,
          alignItems: "center",
          justifyItems: "center",
        },
      }}
    >
      <div
        id="TradeBox"
        className="w-full  border border-gray-6  text-gray-1 overflow-hidden"
        {...{
          style: {
            gridArea: "center",
            height: "131px",
            display: "grid",
            gridTemplate: `
            "line1"
            "line2"
            `,
            borderRadius: "10px",
            alignItems: "center",
          },
        }}
      >
        <TradeBoxLine
          {...{
            instruction: "Buy",
            currency: "BTC",
            gridArea: "line1",
            id: "Buy",
            buySet,
          }}
        />
        <TradeBoxLine
          {...{
            instruction: "Pay with",
            currency: "ETH",
            gridArea: "line2",
            id: "PayWith",
            buySet,
          }}
        />
      </div>
      <BorderAndSwapButton />
    </div>
  );
};

export default TradeBox;
