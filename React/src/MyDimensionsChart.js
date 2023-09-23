import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

export default function MyDimensionsChart({ title, dataSets }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    //const datasets = [
    //  {
    //    label: 'First Dataset',
    //    data: [{ x: 20, y: 30, r: 15 }, { x: 40, y: 10, r: 10 }, { x: 10, y: 15, r: 5 }],
    //  },
    //  {
    //    label: 'Second Dataset',
    //    data: [{ x: 30, y: 40, r: 25 }, { x: 40, y: 20, r: 30 }, { x: 15, y: 20, r: 17 }],
    //  }];

    new Chart(
      canvasRef.current, // document.getElementById('canvas-id'),
      {
        type: 'bubble',
        data: {
          datasets: dataSets
        },
        options: {}
      }
    );
  }, [])

  return (
    <div className="p-2 my-2" style={{ width: 800, border: 'solid 2px red', borderRadius: 8 }}>
      <h3>{title}</h3>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}
