import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Notfound extends Component {
   render() {
      return (
         <div>
            <h1>Page not found</h1>
            <p>Return to <Link to="/">Main Page</Link></p>
         </div>
      )
   }
}

export default Notfound;