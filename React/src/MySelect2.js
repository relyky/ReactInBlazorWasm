import React, { useState, forwardRef, useImperativeHandle } from 'react'
import Select from 'react-select'

//const options = [
//  { value: 'chocolate', label: 'Chocolate' },
//  { value: 'strawberry', label: 'Strawberry' },
//  { value: 'vanilla', label: 'Vanilla' }
//]

/**
 * props := { 
 *   options, 
 *   onChange, 
 *   value 
 * }
 */

//§§ 這個進階版的寫法也沒有快多少的樣子！大概都在前端跑的關系吧。
export default forwardRef(function MySelect2({ options, onChange, value } , ref) {
  const [_options, setOptions] = useState(options);
  const [_value, setValue] = useState(value);

  useImperativeHandle(ref, () => {
    return {
      updateOptions: (newOptions) => {
        //console.log('MySelect2.updateOptions =>', newOptions.length)
        setOptions(newOptions)
      },
      updateValue: (newValue) => {
        //console.log('MySelect2.updateValue =>', newValue)
        setValue(newValue)
      },
    };
  }, [_options, _value])

  return (
    <Select options={_options} onChange={onChange} value={_value} />
  )
});

