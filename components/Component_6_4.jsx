import Component_6_4_1 from './Component_6_4_1';

function Component_6_4() {
  return (
    <div
      className="flex justify-start items-stretch gap-y-[5%] gap-x-[5%] caret-[#363d43] mt-16"
      data-component-id="Component_6_4"
    >
      <div className="flex flex-col grow basis-[0%] justify-end items-start gap-y-6 gap-x-6 caret-[#363d43]">
        <h3 className="text-[#101920] leading-[38.4px] font-normal text-[32px] caret-[#101920] my-0">
          Less mistakes and more detailled coverage breakdowns
        </h3>
        <p className="leading-[24px] caret-[#363d43] my-0">
          Say goodbye to endless denials with precise benefit information
        </p>
      </div>
      <Component_6_4_1 />
    </div>
  );
}

export default Component_6_4;
