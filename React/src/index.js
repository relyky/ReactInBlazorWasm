import React from 'react'
import ReactDOM from 'react-dom/client'
import MyCounter from './MyCounter'
import MyTitle from './MyTitle'
import MySelect from './MySelect'
import MyQRCode from './MyQRCode'
import MyAcquisitionsChart from './MyAcquisitionsChart'

//## 註冊單向繫結 React 元件：MyTitle
window.renderMyTitle = function (rootElement, title) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MyTitle title={title} />);
}

//## 註冊雙向繫結 React 元件：MyCounter
window.renderMyCounter = function (dotNetObject, rootElement, initCount) {
  function handleChange(newCount) {
    // events up
    dotNetObject.invokeMethodAsync('OnCountChange', newCount);
    console.log(`你變了 => ${newCount}`);
  }

  // props down
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MyCounter initCount={initCount} onChange={handleChange} />);
}

//## 註冊雙向繫結 React 元件：react-select
window.renderMySelect = function (dotNetObject, rootElement, options, value) {
  //const options = [
  //  { value: '焦糖瑪奇朵', label: '焦糖瑪奇朵' },
  //  { value: '阿華田', label: '阿華田' },
  //  { value: 'chocolate', label: 'Chocolate' },
  //  { value: 'strawberry', label: 'Strawberry' },
  //  { value: 'vanilla', label: 'Vanilla' }
  //]

  function handleChange(selectedOption /* LabelValue */) {
    console.log(`MySelect.OnSelect =>`, selectedOption);
    dotNetObject.invokeMethodAsync('OnSelect', selectedOption);
  };

  console.log(`MySelect.render =>`, value);
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MySelect options={options} onChange={handleChange} value={value} />);
}

//## 註冊單向繫結 React 元件：qrcode.react
window.renderMyQRCode = function (rootElement, code) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MyQRCode code={code} />);
}

//## 註冊單向繫結 React 元件：Chart.js
window.renderMyAcquisitionsChart = function (rootElement, title) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MyAcquisitionsChart title={title} />);
}
