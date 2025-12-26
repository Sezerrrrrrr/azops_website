import Component_5_2_1 from './Component_5_2_1';
import Component_5_2_2 from './Component_5_2_2';
import Component_5_2_3 from './Component_5_2_3';
import Component_5_2_4 from './Component_5_2_4';

function Component_5_2() {
  return (
    <div
      className="flex gap-y-[3%] gap-x-[3%] caret-[#363d43] mt-16"
      data-component-id="Component_5_2"
    >
      <div className="grow basis-[0%] caret-[#363d43]">
        <img
          src="https://cdn.prod.website-files.com/687e1b1815336f057e7b0e2a/6890a03aa71d29dac0e5666d_a58b4142bab31e27c76e9701756d1e68_solution-img.png"
          loading="lazy"
          className="opacity-0 align-middle w-full max-w-full inline-block caret-[#363d43] select-none"
        />
      </div>
      <div className="flex flex-col grow basis-[0%] justify-between items-start caret-[#363d43] my-[1%]">
        <Component_5_2_1 />
        <Component_5_2_2 />
        <Component_5_2_3 />
        <Component_5_2_4 />
      </div>
    </div>
  );
}

export default Component_5_2;
