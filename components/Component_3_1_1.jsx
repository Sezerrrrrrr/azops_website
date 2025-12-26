import Component_3_1_1_1 from './Component_3_1_1_1';

function Component_3_1_1() {
  return (
    <div
      className="bg-white flex justify-start items-center gap-y-[5%] gap-x-[5%] caret-[#363d43] pl-[5%] pr-[0%] py-16 rounded-br-[32px] rounded-t-[32px] rounded-bl-[32px] border-[#d2d2d2] border"
      data-component-id="Component_3_1_1"
    >
      <div className="w-[30%] caret-[#363d43]">
        <div className="leading-[24px] caret-[#363d43]">
          Built by former big tech engineers and billing experts
        </div>
      </div>
      <div className="w-[70%] caret-[#363d43]">
        <Component_3_1_1_1 />
      </div>
    </div>
  );
}

export default Component_3_1_1;
