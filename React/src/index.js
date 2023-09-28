import React, { createRef } from 'react'
import ReactDOM from 'react-dom/client'
import r2wc from "@r2wc/react-to-web-component"
import BlackScreen from './BlackScreen'
import { v4 as uuidv4 } from 'uuid'
import MyCounter from './MyCounter'
import MyTitle from './MyTitle'
import MySelect from './MySelect'
import MyQRCode from './MyQRCode'
import MyAcquisitionsChart from './MyAcquisitionsChart'
import MyDimensionsChart from './MyDimensionsChart'
import MyMiniApp from './MyMiniApp'
import MySelect2 from './MySelect2'
import MyVisNetwork from './MyVisNetwork'

window.MyReactComponentsRepo = {}

//#region 只能註冊簡單的 Web Componnets
//※ 只能 props-down 尚無法 events-up。

customElements.define("web-black-screen", r2wc(BlackScreen, {
  props: {
    idname: "string",
  },
}));

//#endregion

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

//#region ## 註冊進階元件: MyMiniApp
window.renderMyMiniApp = function (rootElement, initAttrs) {
  const root = ReactDOM.createRoot(rootElement)
  const rootRef = createRef()

  this.updateAttrs = (newAttrs) => {
    rootRef.current.updateAttrs(newAttrs)
  }

  function handleChange(attrs) {
    console.log('MyMiniApp.handleChange =>', { attrs })
    // 需要上送訊息的話，可透過 dotNetObject.invokeMethodAsync() 往上送訊息。
  }

  root.render(<MyMiniApp ref={rootRef} attrs={initAttrs} onChange={handleChange} />)

  const miniAppUid = `MyMiniApp-${uuidv4()}`
  window.MyReactComponentsRepo[miniAppUid] = this
  return miniAppUid
}

window.updateMyMiniApp = function (miniAppUid /* string */, newAttrs /* object */)
{
  const miniApp = window.MyReactComponentsRepo[miniAppUid]
  miniApp.updateAttrs(newAttrs)
}

//#endregion

//#region ## 註冊進階元件: MySelect Adv : react-select
window.renderMySelect2 = function (dotNetObject, rootElement, options, value) {
  //const options = [
  //  { value: '焦糖瑪奇朵', label: '焦糖瑪奇朵' },
  //  { value: '阿華田', label: '阿華田' },
  //  { value: 'chocolate', label: 'Chocolate' },
  //  { value: 'strawberry', label: 'Strawberry' },
  //  { value: 'vanilla', label: 'Vanilla' }
  //]

  const root = ReactDOM.createRoot(rootElement)
  const rootRef = createRef()

  this.updateAttrs = (newAttrs) => {
    //console.log(`renderMySelect2.updateAttrs`);
    const { options, value } = newAttrs

    if (options && Array.isArray(options))
    {
      rootRef.current.updateOptions(options)
    }

    if (value === null) {
      rootRef.current.updateValue(value)
    }
    else if (value instanceof Object) {
      rootRef.current.updateValue(value)
    }
  }

  function handleChange(selectedOption /* LabelValue */) {
    //console.log(`MySelect2.OnSelect =>`, selectedOption);
    dotNetObject.invokeMethodAsync('OnSelect', selectedOption);
  };

  //console.log(`MySelect2.render =>`, value);
  root.render(<MySelect2 ref={rootRef} options={options} onChange={handleChange} value={value} />);

  const miniAppUid = `MySelect2-${uuidv4()}`
  window.MyReactComponentsRepo[miniAppUid] = this
  return miniAppUid
}

window.updateMySelect2 = function (miniAppUid /* string */, newAttrs /* object */) {
  console.log(`updateMySelect2 =>`, newAttrs);
  const miniApp = window.MyReactComponentsRepo[miniAppUid]
  miniApp.updateAttrs(newAttrs)
}

//#endregion

//#region ## 註冊元件: vis-network 測試 
window.renderMyVisNetwork = function (rootElement, title) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MyVisNetwork title={title} />);
}
