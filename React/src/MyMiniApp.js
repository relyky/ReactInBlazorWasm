import React, { useState, forwardRef, useImperativeHandle } from 'react'

export default forwardRef(function MyMiniApp(props, ref) {
  const [state, setState] = useState(1);

  useImperativeHandle(ref, () => {
    return {
      updateProps: () => {
        console.log('MyMiniApp', { state });
        setState(state + 1);
      },
    };
  }, [state]);

  return (
    <div className="p-2 my-2" style={{ border: 'solid 2px red', borderRadius: 8 }}>
      <h3>MyMiniApp (`{state}`)</h3>
      <h4>我用 React 開發出來的</h4>
    </div>
  )
});
