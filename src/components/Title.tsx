const Title = ({}) => {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex flex-col mobile:flex-row mobile:gap-2 mobile:items-center">
        <div className="hidden mobile:inline w-8 h-8">
          <div className="w-8 h-8 bg-white rounded-full border border-gray-6" />
        </div>
        <h3 className="font-medium tracking-tight leading-7 mobile:leading-[unset] text-header-3">
          Bitcoin
        </h3>
        <p className="relative top-[2px] leading-7 mobile:leading-[unset]">
          BTC
        </p>
      </div>

      {/* Share Icons */}
      <div className="flex gap-4 items-center">
        <div className="flex justify-center items-center w-8 h-8 !rounded-full bg-gray-6" />
        <div className="flex justify-center items-center w-8 h-8 !rounded-full bg-gray-6" />
      </div>
    </div>
  );
};

export default Title;
