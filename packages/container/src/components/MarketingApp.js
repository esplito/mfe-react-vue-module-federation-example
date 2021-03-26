import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

// you should be able to the same kind of pattern in other frameworks like Angular or Vue.
export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
