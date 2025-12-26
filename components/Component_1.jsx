import Component_1_1 from './Component_1_1';

function Component_1() {
  return (
    <div
      className="fixed z-[1000] caret-[#363d43] top-[0%] bottom-auto inset-x-[0%]"
      data-component-id="Component_1"
    >
      <Component_1_1 />
      <div id="responsive-menu" className="hidden caret-[#363d43]">
        <a href="/how-it-works" className="underline">
          Tech Strategy & Foresight
        </a>
        <a href="/ai-patent-analytics" className="underline">
          Patent analytics
        </a>
        <a href="/about-us" className="underline">
          About us
        </a>
        <a href="/blog" className="underline">
          Blog
        </a>
        <a href="/customer-stories" className="underline">
          Customer stories
        </a>
        <a href="/insights" className="underline">
          Insights
        </a>
        <a href="/events" className="underline">
          Events
        </a>
        <a
          href="https://odin.getfocus.eu/login?redirect=/"
          className="underline"
        >
          Log in
        </a>
        <a href="https://calendly.com/sezer123/call" className="underline">
          Get a demo
        </a>
      </div>
    </div>
  );
}

export default Component_1;
