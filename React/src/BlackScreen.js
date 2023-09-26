import React, { useEffect } from 'react'

export default function BlackScreen({ idname }) {

  useEffect(() => {
    const loadtimeId = idname || 'loadtime';

    function handleLoad(event) {
      const now = Date.now();
      sessionStorage.setItem(loadtimeId, now);
      localStorage.setItem(loadtimeId, now);
    }

    function handleFocus(event) {
      if (!document.getElementById('blackscreen')) {
        const sessionLoadTime = sessionStorage.getItem(loadtimeId);
        const localLoadTime = localStorage.getItem(loadtimeId);
        if (sessionLoadTime < localLoadTime) {
          const blackscreen = document.createElement('div');
          blackscreen.style = "position:fixed;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:99999;cursor:pointer;";
          blackscreen.innerHTML = "<H1 style='color:red;text-align:center;'>此介面已過期</H1><H2 style='color:red;text-align:center;'>同一時間相同介面只有最新的有效。</H2>";
          blackscreen.id = 'blackscreen';
          document.body.appendChild(blackscreen);
        }
      }
    }

    window.addEventListener('load', handleLoad)
    window.addEventListener('focus', handleFocus)
    return () => {
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('focus', handleFocus)
    }
  });

  return (
    <></>
  )
}
