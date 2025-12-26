function Component_1_1_1_2() {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById('faq');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href="#faq"
      onClick={handleSmoothScroll}
      className="text-[#101920] leading-[17.6px] [font-family:Chivo,sans-serif,system-ui,sans-serif] font-light text-[17.6px] tracking-[-0.54px] uppercase block [background-position-x:0%] [background-position-y:100%] bg-no-repeat caret-[#101920] px-0.5"
      data-style-id="style-4-1766408572364"
      data-component-id="Component_1_1_1_2"
    >
      FAQ
    </a>
  );
}

export default Component_1_1_1_2;
