import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

export default function MyAcquisitionsChart({ title }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    new Chart(
      canvasRef.current, // document.getElementById('canvas-id'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: '年度採購',
              data: data.map(row => row.count)
            }
          ]
        }
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
