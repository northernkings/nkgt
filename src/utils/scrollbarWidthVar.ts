export const scrollbarWidthVar = function () {
  const styleNode = document.createElement('style');

  function setScrollbarWidth() {
    const scrollbarWidth: string =
      window.innerWidth - document.documentElement.clientWidth + 'px';
    styleNode.textContent = /* css */ `
      :root {
        --scrollbar-width: ${scrollbarWidth}
      }
    `;
    document.head.appendChild(styleNode);
  }

  function handleWindowResize() {
    let timeout: number | undefined;
    return () => {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        setScrollbarWidth();
      }, 200);
    };
  }

  setScrollbarWidth();

  window.addEventListener('resize', handleWindowResize);
};
