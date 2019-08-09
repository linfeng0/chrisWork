import React from 'react';
import  Nav  from './nav-bar';
import { LeftBar } from './left-bar';
import ContentBar from './content-bar/index'

const App: React.FC = (state) => {
  return (
    <div className="App">
          <Nav />
          <div className="main">
              <LeftBar />
              <ContentBar />
          </div>
    </div>
  );
}

export default App;
