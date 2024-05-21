// required import statements
import React from 'react';
import ReactDOM from 'react-dom/client';

//Element. Does not render to screen until render is called
const testElement = <h1>My Todo List</h1>
const testElement2 = <h2>Made with React</h2>

//Making root (where everything renders)
const root = ReactDOM.createRoot(document.getElementById('root'));

//render to root using render
root.render(testElement);
//root.render(testElement2); This cancels my first render... interesting









