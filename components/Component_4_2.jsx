import { useEffect, useRef, useState } from 'react';
import Component_4_2_1 from './Component_4_2_1';

function Component_4_2() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="flex gap-y-[3%] gap-x-[3%] caret-[#363d43] mt-16"
      data-component-id="Component_4_2"
    >
      <div
        ref={imageRef}
        className={`aspect-[3_/_2.1] relative overflow-hidden grow basis-[0%] caret-[#363d43] rounded-br-[24px] rounded-t-[24px] rounded-bl-[24px] transition-all duration-700 ease-out ${
          isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      >
        <img 
          src="/images/phones-illustration.png" 
          alt="Phones illustration showing multiple communication devices"
          className="w-full h-full object-cover rounded-br-[24px] rounded-t-[24px] rounded-bl-[24px]"
        />
      </div>
      <Component_4_2_1 />
    </div>
  );
}

export default Component_4_2;
