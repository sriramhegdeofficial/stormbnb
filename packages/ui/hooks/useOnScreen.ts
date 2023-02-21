import React from 'react';

export function useOnScreen(ref: React.MutableRefObject<HTMLElement | null> , rootMargin = "0px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = React.useState(false);
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current !== null) {
        observer.observe(ref.current);
      }
      return () => {
        if(ref.current !== null){
            observer.unobserve(ref.current);
        }
        
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
  }