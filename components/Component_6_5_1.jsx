import Component_6_5_1_1 from './Component_6_5_1_1';

function Component_6_5_1() {
  return (
    <div
      className="bg-neutral-100 hover:bg-[#8893FE] h-[400px] relative flex flex-col grow basis-[0%] justify-end items-start gap-y-[72px] gap-x-[72px] caret-[#363d43] p-9 rounded-br-[32px] rounded-t-[32px] rounded-bl-[32px] group overflow-hidden transition-colors duration-300"
      data-component-id="Component_6_5_1"
    >
      <Component_6_5_1_1 />
      <div className="absolute flex justify-start items-end caret-[#363d43] p-9 inset-[0%] group">
        <div className="flex grow basis-[0%] justify-start items-end gap-y-[12.8px] gap-x-[12.8px] caret-[#363d43] group-hover:items-center group-hover:translate-y-[-17rem] transition-all duration-700 ease-in-out">
          <div className="text-[#8993ff] leading-[0.8] text-[136px] caret-[#8993ff] group-hover:text-[white] group-hover:text-[4.375rem] transition-all duration-700 ease-in-out">
            45%
          </div>
          <div className="max-w-48 caret-[#363d43]">
            <div className="text-[#101921] group-hover:text-white leading-[28.6px] text-[22px] caret-[#101921] group-hover:caret-white transition-colors duration-700 ease-in-out">
              Extra productivity thanks to standardization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component_6_5_1;
