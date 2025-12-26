function Component_7_3_1() {
  return (
    <div
      className="flex justify-start items-center caret-[#363d43]"
      data-component-id="Component_7_3_1"
    >
      <div className="caret-[#363d43]">
        <form
          id="wf-form-Sign-up-form"
          name="wf-form-Sign-up-form"
          aria-label="Sign up form"
          className="flex justify-start items-center gap-y-4 gap-x-4 caret-[#363d43] mb-0"
        >
          <input
            maxLength="256"
            name="email"
            placeholder="Enter your email"
            type="email"
            id="email"
            required
            className="bg-[rgba(255,255,255,0)] text-white leading-[1.42857] text-[16px] align-middle w-64 h-[38px] block caret-white [border-top-style:none] [border-right-style:none] [border-left-style:none] pl-0 pr-3 py-2 border-t-0 border-t-black border-b-[#64696d] border-x-0 border-x-black border-b"
          />
          <input
            type="submit"
            defaultvalue="SIGN UP"
            className="text-[#101920] [font-family:Chivo,sans-serif,system-ui,sans-serif] text-[16px] uppercase text-center [white-space-collapse:preserve] [text-wrap-mode:nowrap] block caret-[#101920] select-none [appearance:button] my-[15px] px-4 py-2 rounded-br-[4px] rounded-t-[4px] rounded-bl-[4px]"
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
    </div>
  );
}

export default Component_7_3_1;
