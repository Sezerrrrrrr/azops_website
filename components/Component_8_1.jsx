import Component_8_1_1 from './Component_8_1_1';

function Component_8_1() {
  return (
    <div
      className="flex justify-between items-center gap-y-[5%] gap-x-[5%] caret-[#363d43]"
      data-component-id="Component_8_1"
    >
      <Component_8_1_1 />
      <div className="flex flex-col justify-end items-center gap-y-4 gap-x-4 caret-[#363d43]">
        <div
          tabIndex="0"
          role="button"
          aria-label="Previous slide"
          className="caret-[#363d43]"
        >
          <img
            src="https://cdn.prod.website-files.com/687e1b1815336f057e7b0e2a/6894895c48df0867f8f7e3ce_arrow-black.svg"
            loading="lazy"
            width="36"
            height="36"
            className="align-middle w-9 max-w-full aspect-[auto_36_/_36] inline-block -rotate-180 caret-[#363d43] select-none"
          />
        </div>
        <div
          tabIndex="0"
          role="button"
          aria-label="Next slide"
          className="caret-[#363d43]"
        >
          <img
            src="https://cdn.prod.website-files.com/687e1b1815336f057e7b0e2a/6894895c48df0867f8f7e3ce_arrow-black.svg"
            loading="lazy"
            width="36"
            height="36"
            className="align-middle w-9 max-w-full aspect-[auto_36_/_36] inline-block caret-[#363d43] select-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Component_8_1;
