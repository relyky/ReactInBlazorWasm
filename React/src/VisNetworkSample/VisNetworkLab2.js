import React, { useEffect, useRef } from "react"
import { Network } from "vis-network"

export default function VisNetworkLab2() {
  const visRef = useRef(null);

  const nodes = [
    { id: 11, label: "約翰", group: "Person" },   // John
    { id: 12, label: "瑪莉", group: "Person" },   // Mary
    { id: 13, label: "愛麗絲", group: "Person" }, // Alice
    { id: 14, label: "雅各", group: "Person" },   // Jacob
    { id: 15, label: "茱麗葉", group: "Person" }, // Julie

    { id: 21, label: "塔克戴爾", group: "Restaurant" }, // Taco Dell
    { id: 22, label: "薑和香料", group: "Restaurant" }, // Ginger and Spice
    { id: 23, label: "麵條樂園", group: "Restaurant" }, // Noodle Land

    { id: 31, label: "貝爾維尤", group: "City" }, // Bellevue
    { id: 32, label: "西雅圖", group: "City" }, // Seattle
    { id: 33, label: "雷德蒙", group: "City" }, // Redmond
  ];

  const edges = [
    { from: 11, to: 21, group: "likes", label: "喜歡", arrows: 'to' },
    { from: 12, to: 22, group: "likes", label: "喜歡", arrows: 'to' },
    { from: 13, to: 23, group: "likes", label: "喜歡", arrows: 'to' },
    { from: 14, to: 23, group: "likes", label: "喜歡", arrows: 'to' },
    { from: 15, to: 21, group: "likes", label: "喜歡", arrows: 'to' },

    { from: 11, to: 31, group: "livesIn", label: "住在" },
    { from: 12, to: 32, group: "livesIn", label: "住在" },
    { from: 13, to: 33, group: "livesIn", label: "住在" },
    { from: 14, to: 33, group: "livesIn", label: "住在" },
    { from: 15, to: 33, group: "livesIn", label: "住在" },

    { from: 21, to: 31, group: "locatedIn", label: "位在" },
    { from: 22, to: 32, group: "locatedIn", label: "位在" },
    { from: 23, to: 33, group: "locatedIn", label: "位在" },

    { from: 11, to: 12, group: "friendOf", label: "朋友" },
    { from: 12, to: 13, group: "friendOf", label: "朋友" },
    { from: 13, to: 11, group: "friendOf", label: "朋友" },
    { from: 14, to: 12, group: "friendOf", label: "朋友" },
    { from: 15, to: 14, group: "friendOf", label: "朋友" },
  ];

  const data = {
    nodes: nodes,
    edges: edges,
  };

  const options = {
    height: "800px",
    //groups: {
    //  City: { borderWidth: 2 },
    //  Restaurant: { color: { background: 'pink', border: 'red' }, borderWidth: 3 },
    //},
    //layout: {
    //  hierarchical: true
    //},
    //edges: {
    //  color: "#000000"
    //},
  };

  useEffect(() => {
    const network = new Network(visRef.current, data, options);
    // Use `network` here to configure events, etc
  }, [visRef, nodes, edges, options]);

  return (
    <div>
      <h4>VisNetworkLab2</h4>
      <div ref={visRef} style={{
        border: 'solid 1px darkgrey'
      }} />
    </div>
  )
}