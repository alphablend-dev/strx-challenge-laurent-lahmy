const Wallet = ({}) => {
  return (
    <div
      id="Wallet"
      className=""
      {...{
        style: {
          display: "grid",
          gridTemplate: `
          "amount . symbol setting"
          / auto 1fr auto auto
        `,
          gap: "10px",
          alignItems: "center",
        },
      }}
    >
      <div
        id=""
        className="text-gray-4 text-body-3"
        {...{ style: { lineHeight: "20px" } }}
      >
        ETH Wallet: $29,778.36
      </div>
      <div />
      <div
        id=""
        className="w-[32px] h-[32px] bg-gray-8 rounded-full grid justify-center content-center"
        {...{ style: {} }}
      >
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 6.81774C12.5816 4.2755 10.1034 2.4541 7.19035 2.4541C3.49537 2.4541 0.5 5.3846 0.5 8.99956C0.5 12.6145 3.49537 15.545 7.19035 15.545C10.1034 15.545 12.5816 13.7236 13.5 11.1814"
            stroke="#262626"
          />
          <path d="M5.375 15.5459V18.0004" stroke="#262626" />
          <path d="M8.625 15.5459V18.0004" stroke="#262626" />
          <path d="M5.375 0V2.45455" stroke="#262626" />
          <path d="M8.625 0V2.45455" stroke="#262626" />
        </svg>
      </div>
      <div
        id=""
        className=" h-[32px] bg-gray-8 rounded-2xl grid justify-center content-center text-gray-1 font-normal px-[12px]"
        {...{ style: {} }}
      >
        MAX
      </div>
    </div>
  );
};
export default Wallet;
