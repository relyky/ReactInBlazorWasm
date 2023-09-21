import React from 'react'
import ReactDOM from 'react-dom/client'
import MyCounter from './MyCounter'
import MyTitle from './MyTitle'

//## 單向繫結 React 元件：MyTitle
window.renderMyTitle = function (rootElement, title) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MyTitle title={title} />);
}

//## 雙向繫結 React 元件：MyCounter
window.renderMyCounter = function (dotNetObject, rootElement, initCount) {
  function handleChange(newCount) {
    // events up
    dotNetObject.invokeMethodAsync('OnCountChange', newCount);
    console.log(`你變了 => ${newCount}`);
  }

  // props down
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MyCounter initCount={initCount} onChange={handleChange} />);
  dotNetObject.invokeMethodAsync('OnCountChange', initCount); // init notify.
}
