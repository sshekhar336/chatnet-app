import React from 'react';

import Chat from './Components/Chat/Chat';
import Join from './Components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/chatnet-app/" exact component={Join} />
      <Route path="/chatnet-app/chat" component={Chat} />
    </Router>
  );
}

export default App;