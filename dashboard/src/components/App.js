import React, { Component } from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
class App extends Component {
  render(){
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}
}

export default App;