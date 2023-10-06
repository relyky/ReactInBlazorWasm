"use strict";
import React from 'react'
import ReactDOM from 'react-dom/client'
import r2wc from "@r2wc/react-to-web-component"
import BlackScreen from './BlackScreen'
// import { v4 as uuidv4 } from 'uuid'
import MyCounter from './MyCounter'
import MyTitle from './MyTitle'
import MySelect from './MySelect'
import MyQRCode from './MyQRCode'
import MyAcquisitionsChart from './MyAcquisitionsChart'
import MyDimensionsChart from './MyDimensionsChart'
import MySelectWrapper from './MySelectWrapper'
import MyVisNetwork from './MyVisNetwork'
import MyDownCounter from './MyDownCounter'
import MyRichEditor from './MyRichEditor'
import MyRichViewer from './MyRichViewer'

//※ 導入 mediator/event-bus 以實現 Blazor 與 React 進階通訊。
window.__eventBus = window.EventBus();

window.__eventBus.on('web-down-counter:on-finish', function () {
  window.location.assign('/signout');
  alert('模擬登入時間已到期 => 自動登出。')
});

//#region 只能註冊簡單的 Web Componnets
//※ 只能 props-down 尚無法 events-up。

customElements.define("web-black-screen", r2wc(BlackScreen, {
  props: {
    idname: "string",
  },
}));

customElements.define("web-down-counter", r2wc(MyDownCounter, {
  props: {
    initCount: "number",
    // onFinish: "function", //註：r2wc 於 React.v18 版尚無法傳遞 function 的樣子 (囧)。
  },
}));

//#endregion

//## 註冊單向繫結 React 元件：MyTitle
window.renderMyTitle = function (rootElement, title) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MyTitle title={title} />
    </React.StrictMode>
  );
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

//#region ## 註冊進階元件: MySelect Adv : react-select

window.renderMySelect2 = function (dotNetObject, elementId, options, value) {
  //注意：此例 elementId 也是 channelId。將透過 mediator 間接通訊。
  const rootElement = document.getElementById(elementId)
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <MySelectWrapper dotNetObject={dotNetObject} channel={elementId} options={options} value={value} />
    </React.StrictMode>
  );
}

//#endregion

//## 註冊單向繫結 React 元件：qrcode.react
window.renderMyQRCode = function (rootElement, code) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MyQRCode code={code} />);
}

//## 註冊單向繫結 React 元件：Chart.js - Bar chart
window.renderMyAcquisitionsChart = function (rootElement, title, data) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MyAcquisitionsChart title={title} data={data} />);
}

//## 註冊單向繫結 React 元件：Chart.js - Bubble chart 
window.renderMyDimensionsChart = function (rootElement, title, dataSets) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MyDimensionsChart title={title} dataSets={dataSets} />);
}

//## 註冊元件: vis-network 測試 
window.renderMyVisNetwork = function (rootElement, title) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MyVisNetwork title={title} />
    </React.StrictMode>
  );
}

//## 註冊元件: react-quill 測試 
window.renderMyRichEditor = function (dotNetObject, rootElement, article) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MyRichEditor dotNetObject={dotNetObject} article={article} />
    </React.StrictMode>
  );
}

window.renderMyRichViewer = function (rootElement, article) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MyRichViewer article={article} />
    </React.StrictMode>
  );
}
