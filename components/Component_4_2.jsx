import Component_4_2_1 from './Component_4_2_1';

function Component_4_2() {
  return (
    <div
      className="flex gap-y-[3%] gap-x-[3%] caret-[#363d43] mt-16"
      data-component-id="Component_4_2"
    >
      <div
        className="aspect-[3_/_2.1] relative overflow-hidden grow basis-[0%] bg-gradient-to-br from-blue-500 to-purple-500 caret-[#363d43] rounded-br-[24px] rounded-t-[24px] rounded-bl-[24px] flex items-center justify-center"
      >
        <img 
          src="/images/phones-illustration.png" 
          alt="Phones illustration showing multiple communication devices"
          className="w-full h-full object-cover rounded-br-[24px] rounded-t-[24px] rounded-bl-[24px]"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.innerHTML += '<div class="text-white text-2xl p-8">📱 Save phone image as:<br/>/public/images/phones-illustration.png</div>';
          }}
        />
      </div>
      <Component_4_2_1 />
    </div>
  );
}

export default Component_4_2;
