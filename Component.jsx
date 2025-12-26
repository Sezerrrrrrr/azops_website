import React, { useEffect } from 'react';
import Component_1 from './components/Component_1';
import Component_2 from './components/Component_2';
import Component_3 from './components/Component_3';
import Component_4 from './components/Component_4';
import Component_5 from './components/Component_5';
import Component_6 from './components/Component_6';
import Component_10 from './components/Component_10';
import Component_11 from './components/Component_11';
import Component_12 from './components/Component_12';

function App() {
  useEffect(() => {
    // Execute delayed scripts after React has rendered
    console.log('[React] DOM rendered, executing delayed scripts...');

    // Execute regular delayed scripts first
    const delayedScripts = document.querySelectorAll(
      'script[type="text/delayed"]'
    );

    delayedScripts.forEach((script) => {
      const newScript = document.createElement('script');

      // External script (has data-src)
      if (script.dataset.src) {
        newScript.src = script.dataset.src;

        // Copy other attributes (integrity, crossorigin, defer, etc.)
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name !== 'data-src') {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      } else {
        // Inline script
        newScript.textContent = script.textContent;

        // Copy data-* attributes
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name.startsWith('data-')) {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      }

      document.body.appendChild(newScript);
    });

    // Execute delayed module scripts (Pattern 006: Pre-bundled ES Module Scripts)
    const delayedModules = document.querySelectorAll(
      'script[type="text/delayed-module"]'
    );

    delayedModules.forEach((script) => {
      const newScript = document.createElement('script');
      newScript.type = 'module'; // Restore original type

      // External module script (has data-src)
      if (script.dataset.src) {
        newScript.src = script.dataset.src;

        // Copy other attributes (crossorigin, etc.)
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name !== 'data-src') {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      } else {
        // Inline module script
        newScript.textContent = script.textContent;

        // Copy data-* attributes
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name.startsWith('data-')) {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      }

      document.body.appendChild(newScript);
    });

    console.log(
      `[React] Executed ${delayedScripts.length} delayed scripts + ${delayedModules.length} delayed modules`
    );
  }, []);

  return (
    <>
      <div className='bg-white text-[#363d43] leading-normal [font-family:"Inter_Tight",sans-serif,system-ui,sans-serif] caret-[#363d43] overflow-x-hidden'>
        <div className="caret-[#363d43] overflow-x-hidden">
          <main className="caret-[#363d43] overflow-x-hidden">
            <Component_1 />
            <Component_2 />
            <Component_3 />
            <Component_4 />
            <Component_5 />
            <Component_6 />
            <Component_12 />
            <Component_10 />
            <Component_11 />
          </main>
        </div>
        <div
          id="hs-web-interactives-top-anchor"
          className="w-full h-full fixed z-[9999] [transform-style:preserve-3d] [backface-visibility:hidden] caret-[#363d43] pointer-events-none left-0 right-auto top-0 bottom-auto"
        ></div>
      </div>
    </>
  );
}

export default App;
