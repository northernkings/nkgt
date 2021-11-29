if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const setScrollbarWidth = () => {
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      window.innerWidth - document.documentElement.clientWidth + 'px'
    );
  };

  const handleWindowResize = () => {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        setScrollbarWidth();
      }, 200);
    };
  };

  setScrollbarWidth();

  window.addEventListener('resize', handleWindowResize);
}
