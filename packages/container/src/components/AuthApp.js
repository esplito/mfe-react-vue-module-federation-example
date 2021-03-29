import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// you should be able to the same kind of pattern in other frameworks like Angular or Vue.
export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory(); // copy of the browser history within container

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn // named onAuthChange in images in lecture notes
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
