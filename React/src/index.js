import React from 'react'
import ReactDOM from 'react-dom/client'
import MyCounter from './MyCounter'
import MyTitle from './MyTitle'
import MySelect from './MySelect'

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

//## 應用於繫結 React 元件：react-select
window.renderMySelect = function (dotNetObject, rootElement, options) {
  //const options = [
  //  { value: '焦糖瑪奇朵', label: '焦糖瑪奇朵' },
  //  { value: '阿華田', label: '阿華田' },
  //  { value: 'chocolate', label: 'Chocolate' },
  //  { value: 'strawberry', label: 'Strawberry' },
  //  { value: 'vanilla', label: 'Vanilla' }
  //]

  function handleChange(selectedOption /* LabelValue */) {
    console.log(`MySelect selected:`, selectedOption);
    dotNetObject.invokeMethodAsync('OnSelect', selectedOption);
  };

  const root = ReactDOM.createRoot(rootElement);
  root.render(<MySelect options={options} onChange={handleChange} />);
}
