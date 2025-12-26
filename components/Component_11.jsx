import Component_11_1 from './Component_11_1';
import Component_11_2 from './Component_11_2';

function Component_11() {
  return (
    <section
      className="bg-[#101920] text-white caret-white"
      data-component-id="Component_11"
    >
      <div className="caret-white px-[5%]">
        <div className="w-full max-w-[1440px] caret-white mx-auto">
          <Component_11_1 />
          <Component_11_2 />
        </div>
      </div>
    </section>
  );
}

export default Component_11;
