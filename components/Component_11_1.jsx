import Component_11_1_1 from './Component_11_1_1';
import Component_11_1_2 from './Component_11_1_2';

function Component_11_1() {
  return (
    <div
      className="flex justify-between items-start gap-y-[5%] gap-x-[5%] caret-white py-[60px]"
      data-component-id="Component_11_1"
    >
      <Component_11_1_1 />
      <Component_11_1_2 />
    </div>
  );
}

export default Component_11_1;
