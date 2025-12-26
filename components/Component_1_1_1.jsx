import Component_1_1_1_1 from './Component_1_1_1_1';
import Component_1_1_1_2 from './Component_1_1_1_2';

function Component_1_1_1() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="flex grow basis-[0%] justify-center items-center gap-y-[3%] gap-x-[3%] caret-[#363d43]"
      data-component-id="Component_1_1_1"
    >
      <Component_1_1_1_1 />
      <a
        href="#benefits"
        onClick={(e) => handleSmoothScroll(e, 'benefits')}
        className="text-[#101920] leading-[17.6px] [font-family:Chivo,sans-serif,system-ui,sans-serif] font-light text-[17.6px] tracking-[-0.54px] uppercase block [background-position-x:0%] [background-position-y:100%] bg-no-repeat caret-[#101920] px-0.5"
        data-style-id="style-3-1766408572364"
      >
        Benefits
      </a>
      <Component_1_1_1_2 />
      <a
        href="/roi-calculator"
        className="text-[#101920] leading-[17.6px] [font-family:Chivo,sans-serif,system-ui,sans-serif] font-light text-[17.6px] tracking-[-0.54px] uppercase block [background-position-x:0%] [background-position-y:100%] bg-no-repeat caret-[#101920] px-0.5"
        data-style-id="style-8-1766408572365"
      >
        ROI Calculator
      </a>
    </div>
  );
}

export default Component_1_1_1;
