import React, { useEffect, useRef } from "react"
import { Network } from "vis-network"

export default function MyVisNetwork({ title }) {

  return (
    <div className="p-2 my-2" style={{ border: 'solid 2px red', borderRadius: 8 }}>
      <h3>{title}</h3>
      <VisNetwork />
    </div>
  )
}

const VisNetwork = () => {
  const visRef = useRef(null);

  const nodes = [
    { id: 1, label: "Node 1", title: "tool tip 1" },
    { id: 2, label: "節點２", title: "tool tip 2" },
    { id: 3, label: "Node 3", title: "tool tip 3" },
    { id: 4, label: "節點四", title: "tool tip 4" },
    { id: 5, label: "Node 5", title: "tool tip 5" },
    { id: 6, label: "第六點", title: "tool tip 6" },
  ];

  const edges = [
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 3 },
    { from: 1, to: 5 },
  ];

  const data = {
    nodes: nodes,
    edges: edges,
  };

  const options = {
    height: "400px",
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
    <div ref={visRef} style={{
      border:'solid 1px darkgrey'
    }} />
  )
}