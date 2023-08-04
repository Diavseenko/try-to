import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";

import Posts from './Posts/posts';
import Notfound from './Notfound/notfound';

export class App extends Component {
   render() {
      return (
         <div>
            <Routes>
               <Route exact path="/" element={<Posts />} />
               <Route path="/*" element={<Notfound />} />
            </Routes>
         </div>
      )
   }
}

export default App;