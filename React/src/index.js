import React from 'react'
import ReactDOM from 'react-dom/client'
import MyCounter from './MyCounter'


// 加入更新此元件函式
window.renderMyCounter = function (id, initCount) {
  const root = ReactDOM.createRoot(document.getElementById(id));
  root.render(<MyCounter initCount={initCount} />);
}
