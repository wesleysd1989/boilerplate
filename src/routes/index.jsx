import React from 'react';
import { Routes as ReactDOMRoutes, Route } from 'react-router-dom';
import { Home, NoMatch, Profile } from '../pages';

function Routes() {
  return (
    <ReactDOMRoutes>
      <Route path="/" exact element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NoMatch />} />
    </ReactDOMRoutes>
  );
}

export default Routes;
