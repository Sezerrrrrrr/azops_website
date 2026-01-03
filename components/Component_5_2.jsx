import Component_5_2_1 from './Component_5_2_1';
import Component_5_2_2 from './Component_5_2_2';
import Component_5_2_3 from './Component_5_2_3';
import Component_5_2_4 from './Component_5_2_4';

function Component_5_2() {
  return (
    <div
      className="flex gap-y-[3%] gap-x-[3%] caret-[#363d43] mt-16"
      data-component-id="Component_5_2"
    >
      <div className="flex-1 min-w-0 caret-[#363d43]">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/X2JBdsMTmWs"
            title="Hear Natalie - AI Voice automation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 min-w-0 justify-between items-start caret-[#363d43] my-[1%]">
        <Component_5_2_1 />
        <Component_5_2_2 />
        <Component_5_2_3 />
        <Component_5_2_4 />
      </div>
    </div>
  );
}

export default Component_5_2;
