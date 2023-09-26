# ReactInBlazorWasm
 * Blazor WASM + NPM + React 練習   
 * 嘗試在 Blazor WASM/Server App 跑 React 元件
 * 說明文章在此：[React In Blazor](https://rely-ky.gitbook.io/gitbook2/react-in-blazor) 

# 引言
官方還不支援。基本上 Blazor 與 React 是競爭對手互不合作是合理的。   
然其共通的基底都是 JavaScript/ES6+ 所以還是有可能的。   
Blazor 的 IJSRuntime 可以與 JS 互通。   
React 的 ReactDOM 模組可以 render 到 html element。   
經測試它們可以有限的互通，交互作用越多鷹架碼就越多。  

# 四種模式
## 一、單向 props-down   
## 二、雙向 props-down, events-up   
## 三、Re-Mount   
元件刷新重整。法一就是直接重新 render 元件，缺點是元件的 state 也會重置不見。    
實務上，這還好可以補。因為 React 在此應用情境上只是輔助不是畫面的主體。   

## 四、DidUpdate (進階用法)
元件刷新重整。法二是局部刷新元件，這樣元件的 state 可以維持。  
實作很麻煩，效益還好。因為 React render 的速度很快。  
全部刷新跟局部刷新元件在體感上是一樣快的。   
實務上，非得局部刷新元件的應用還沒想到。因為 React 在此應用情境上只是輔助不是畫面的主體。   

> 另一個方案：把 React 打包成 WebComponent。   
> 經測試(on 2023-9-26)，React 轉換成 Web Component 是可以的。但是 Blazor 無法完整的消費 Web Component。   
> 可以 props-down 但無法傳遞 function 也就是無法實作 events-up，這樣就價值不足。   
> 未來若 Blazor 正式支援 Web Components 後還是有導入的價值。   

