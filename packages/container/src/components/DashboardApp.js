import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

// you should be able to do the same kind of pattern in other frameworks like Angular or Vue.
export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
