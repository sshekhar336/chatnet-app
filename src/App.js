import React from 'react';

import Chat from './Components/Chat/Chat';
import Join from './Components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path={process.env.PUBLIC_URL + '/'} exact component={Join} />
      <Route path={process.env.PUBLIC_URL + '/chat'} component={Chat} />
    </Router>
  );
}

export default App;