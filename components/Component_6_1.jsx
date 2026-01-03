import { useEffect, useRef, useState } from 'react';

function Component_6_1() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = ['Natalie', 'is', 'here', 'to', 'run', 'your', 'practice', 'smoothly.'];

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-screen-md caret-[#363d43] overflow-hidden"
      data-component-id="Component_6_1"
    >
      <div 
        className={`flex justify-center items-center gap-y-2 gap-x-2 caret-[#363d43] mb-4 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="bg-[#101920] w-2 h-2 shrink-0 caret-[#363d43] rounded-br-[1600px] rounded-t-[1600px] rounded-bl-[1600px]"></div>
        <div className="text-[#101920] leading-[24px] [font-family:Chivo,sans-serif,system-ui,sans-serif] uppercase caret-[#101920]">
          BENEFIT
        </div>
      </div>
      <h2
        aria-label="Natalie is here to help you run your practice smoothly."
        className="text-[#101920] leading-[64.4px] font-normal text-[56px] caret-[#101920] my-0 overflow-hidden text-center"
      >
        {words.map((word, index) => (
          <span key={index}>
            <span className="inline-block overflow-hidden">
              <span
                className={`inline-block transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-full opacity-0'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                {word}
              </span>
            </span>
            {index < words.length - 1 && ' '}
          </span>
        ))}
      </h2>
    </div>
  );
}

export default Component_6_1;
