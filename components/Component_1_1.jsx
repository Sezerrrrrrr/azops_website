import Component_1_1_1 from './Component_1_1_1';

function Component_1_1() {
  return (
    <div
      className="bg-white caret-[#363d43] m-5 py-[16.48px] rounded-br-[8px] rounded-t-[8px] rounded-bl-[8px]"
      data-component-id="Component_1_1"
    >
      <div className="flex justify-between items-center caret-[#363d43] px-8">
        <a href="/" className="underline max-w-full block">
          <img
            width="140"
            height="40"
            alt="Azops logo"
            src="/azops-logo.svg"
            loading="lazy"
            className="align-middle w-36 max-w-full inline-block select-none"
          />
        </a>
        <Component_1_1_1 />
        <div className="flex justify-start items-center gap-y-4 gap-x-4 caret-[#363d43]">
          <a
            href="https://odin.getfocus.eu/login?redirect=/"
            className="text-[#101920] leading-[17.6px] [font-family:Chivo,sans-serif,system-ui,sans-serif] font-light text-[17.6px] tracking-[-0.54px] uppercase block [background-position-x:0%] [background-position-y:100%] bg-no-repeat caret-[#101920] px-0.5"
            data-style-id="style-9-1766408572365"
          >
            Log in
          </a>
          <a
            href="https://calendly.com/sezer123/call"
            className="bg-[#101920] text-neutral-100 [font-family:Chivo,sans-serif,system-ui,sans-serif] uppercase text-center block caret-neutral-100 my-[15px] px-4 py-2 rounded-br-[4px] rounded-t-[4px] rounded-bl-[4px] hover:bg-[#5CECFF] hover:text-[#101921] transition-colors duration-200"
          >
            Get a demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Component_1_1;
