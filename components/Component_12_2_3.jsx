import { useState } from 'react';

function Component_12_2_3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white border border-[#e5e5e5] rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px] overflow-hidden hover:bg-[#f9f9f9] transition-colors duration-200"
      data-component-id="Component_12_2_3"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center gap-x-4 cursor-pointer p-6"
        role="button"
        tabIndex="0"
        aria-expanded={isOpen}
      >
        <h3 className="text-[#101920] text-xl font-normal caret-[#101920] my-0">
          How accurate is the information collected?
        </h3>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6">
          <p className="text-[#363d43] leading-[24px] my-0">
            As accurate as you need it to be. The AI retrieves the same information a trained staff member would, and we can tailor the depth and formatting of the data without any difference in price.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component_12_2_3;
