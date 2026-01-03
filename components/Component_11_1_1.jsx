import { Link } from 'react-router-dom';

function Component_11_1_1() {
  const handleSmoothScroll = (e, targetId) => {
    // Check if we are on the home page
    if (window.location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
  };

  return (
    <div className="caret-white" data-component-id="Component_11_1_1">
      <a href="/" className="underline max-w-full inline-block">
        <img
          src="/azops-logo.svg"
          loading="lazy"
          width="300"
          height="90"
          alt="Azops logo"
          className="align-middle w-72 max-w-full inline-block select-none brightness-0 invert"
        />
      </a>
      <div className="flex flex-col justify-start items-start gap-y-4 gap-x-4 caret-white mt-12 pl-6 border-l-[#363d43] border-r-white border-y-white border-l">
        <a
          href="/#solution"
          onClick={(e) => handleSmoothScroll(e, 'solution')}
          className="leading-[17.6px] [font-family:Chivo,sans-serif,system-ui,sans-serif] font-light text-[17.6px] tracking-[-0.54px] uppercase block [background-position-x:0%] [background-position-y:100%] bg-no-repeat caret-white px-0.5 hover:text-black transition-colors duration-200"
          data-style-id="style-15-1766408572365"
        >
          Solution
        </a>
        <a
          href="/#benefits"
          onClick={(e) => handleSmoothScroll(e, 'benefits')}
          className="leading-[17.6px] [font-family:Chivo,sans-serif,system-ui,sans-serif] font-light text-[17.6px] tracking-[-0.54px] uppercase block [background-position-x:0%] [background-position-y:100%] bg-no-repeat caret-white px-0.5 hover:text-black transition-colors duration-200"
          data-style-id="style-16-1766408572365"
        >
          Benefits
        </a>
        <a
          href="/#faq"
          onClick={(e) => handleSmoothScroll(e, 'faq')}
          className="leading-[17.6px] [font-family:Chivo,sans-serif,system-ui,sans-serif] font-light text-[17.6px] tracking-[-0.54px] uppercase block [background-position-x:0%] [background-position-y:100%] bg-no-repeat caret-white px-0.5 hover:text-black transition-colors duration-200"
          data-style-id="style-17-1766408572365"
        >
          FAQ
        </a>
        <Link
          to="/roi-calculator"
          className="leading-[17.6px] [font-family:Chivo,sans-serif,system-ui,sans-serif] font-light text-[17.6px] tracking-[-0.54px] uppercase block [background-position-x:0%] [background-position-y:100%] bg-no-repeat caret-white px-0.5 hover:text-black transition-colors duration-200"
          data-style-id="style-18-1766408572365"
        >
          ROI Calculator
        </Link>
        <a
          href="https://odin.getfocus.eu/login?redirect=/"
          className="leading-[17.6px] [font-family:Chivo,sans-serif,system-ui,sans-serif] font-light text-[17.6px] tracking-[-0.54px] uppercase block [background-position-x:0%] [background-position-y:100%] bg-no-repeat caret-white px-0.5 hover:text-black transition-colors duration-200"
          data-style-id="style-19-1766408572365"
        >
          Log in
        </a>
      </div>
    </div>
  );
}

export default Component_11_1_1;
