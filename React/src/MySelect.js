import React from 'react'
import Select from 'react-select'

//const options = [
//  { value: 'chocolate', label: 'Chocolate' },
//  { value: 'strawberry', label: 'Strawberry' },
//  { value: 'vanilla', label: 'Vanilla' }
//]

export default function MySelect({ options, onChange }) {

  //function handleChange(selectedOption) {
  //  // setSelected(selectedOption);
  //  console.log(`Option selected:`, selectedOption);
  //};

  return (
    <Select options={options} onChange={onChange} />
  )
}
