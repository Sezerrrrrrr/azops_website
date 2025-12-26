import Component_6_2_1 from './Component_6_2_1';

function Component_6_2() {
  return (
    <div
      className="flex justify-start items-stretch gap-y-[5%] gap-x-[5%] caret-[#363d43] mt-16"
      data-component-id="Component_6_2"
    >
      <div className="flex flex-col grow basis-[0%] justify-end items-start gap-y-6 gap-x-6 caret-[#363d43]">
        <h3 className="text-[#101920] leading-[38.4px] font-normal text-[32px] caret-[#101920] my-0">
          Save time on manual calls and data entry
        </h3>
        <p className="leading-[24px] caret-[#363d43] my-0">
          Natalie enables your admin team to focus on claim denials and other high-value tasks
        </p>
      </div>
      <Component_6_2_1 />
    </div>
  );
}

export default Component_6_2;
