import Component_2_1 from './Component_2_1';
import Component_2_2 from './Component_2_2';

function Component_2() {
  return (
    <section
      className="bg-[#101920] text-white relative caret-white h-[1017px] overflow-hidden"
      data-component-id="Component_2"
    >
      <div className="caret-white px-[5%]">
        <div className="w-full max-w-[1440px] caret-white mx-auto">
          <div className="relative z-[2] caret-white pt-[164px] pb-0">
            <Component_2_1 />
            <Component_2_2 />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[242px] bg-white z-[1]"></div>
      <img
        src="https://cdn.prod.website-files.com/687e1b1815336f057e7b0e2a/68ac4131f430da4defc4752d_home-atf-ellipse.svg"
        loading="lazy"
        width="1699"
        height="1699"
        className="align-middle w-[1000%] aspect-[auto_1699_/_1699] absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 block caret-white select-none pointer-events-none z-0 scale-125"
      />
    </section>
  );
}

export default Component_2;
