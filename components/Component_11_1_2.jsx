function Component_11_1_2() {
  return (
    <div
      className="max-w-[496px] flex flex-col gap-y-6 gap-x-6 caret-white"
      data-component-id="Component_11_1_2"
    >
      <div className="leading-[28.6px] text-[22px] caret-white">
        Stay up to date on features and releases.
      </div>
      <div className="caret-white">
        <form
          id="wf-form-Sign-up-form-2"
          name="wf-form-Sign-up-form"
          aria-label="Sign up form"
          className="flex justify-start items-center gap-y-4 gap-x-4 caret-white mb-0"
        >
          <input
            maxLength="256"
            name="email"
            placeholder="Enter your email"
            type="email"
            id="email-2"
            required
            className="bg-transparent text-white leading-[1.42857] text-[16px] align-middle w-full h-[38px] block caret-white focus:outline-none pl-0 pr-3 py-2 border-0 border-b border-b-[#64696d] focus:border-b-white transition-colors"
          />
          <input
            type="submit"
            value="SIGN UP"
            className="bg-white text-[#101920] [font-family:Chivo,sans-serif,system-ui,sans-serif] text-[16px] uppercase text-center whitespace-nowrap block caret-[#101920] cursor-pointer px-4 py-2 rounded-br-[4px] rounded-t-[4px] rounded-bl-[4px] hover:bg-[#5CECFF] hover:text-[#101921] transition-colors duration-200"
          />
        </form>
        <div
          tabIndex="-1"
          role="region"
          aria-label="Sign up form success"
          className="bg-[#101920] text-[#a6f4c5] text-center hidden caret-[#a6f4c5] p-5"
        >
          <div className="caret-[#a6f4c5]">
            Thank you! Your submission has been received.
          </div>
        </div>
        <div
          tabIndex="-1"
          role="region"
          aria-label="Sign up form failure"
          className="bg-[rgba(255,222,222,0)] text-[#f97066] text-[14px] hidden caret-[#f97066] mt-2.5"
        >
          <div className="caret-[#f97066]">
            Oops! Something went wrong while submitting the form.
          </div>
        </div>
      </div>
      <div className="text-[#64696d] leading-[18px] text-[12px] caret-[#64696d]">
        By subscribing you agree to with our Privacy Policy and provide consent
        to receive updates from our company.
      </div>
    </div>
  );
}

export default Component_11_1_2;
