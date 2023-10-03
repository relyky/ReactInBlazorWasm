import React, { useState, useEffect } from 'react'
import Select from 'react-select'

//const options = [
//  { value: 'chocolate', label: 'Chocolate' },
//  { value: 'strawberry', label: 'Strawberry' },
//  { value: 'vanilla', label: 'Vanilla' }
//]

/**
 * props := { 
 *   dotNetObject,
 *   channel: MediatorChannel, 
 *   value 
 *   options, 
 * }
 */

export default function MySelectWrapper({ dotNetObject, channel, options, value }) {
  const [_options, setOptions] = useState(options);
  const [_value, setValue] = useState(value);

  useEffect(() => {
    // 註冊通訊
    window.__mediator.subscribe(channel, (payload) => {
      //## update props
      const { value: newValue, options: newOptions } = payload
      if (!!newValue) setValue(newValue)
      if (!!newOptions) setOptions(newOptions)
    });
    return () => {
      // 解除註冊通訊
      window.__mediator.remove(channel)
    }
  }, [])

  //## events up with dotNetObject
  function handleChange(selectedOption /* LabelValue */) {
    dotNetObject.invokeMethodAsync('OnSelect', selectedOption);
  }

  return (
    <Select options={_options} onChange={handleChange} value={_value} />
  )
}
