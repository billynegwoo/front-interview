import React, {useRef} from 'react'


const Sorter = ({handleSort}) => {
  const selectRef = useRef();
  function handleChange() {
    // @ts-ignore
    handleSort(selectRef.current.value)
  }
  return(
    <div>
      <label>Date:</label>
      <select ref={selectRef} name="sorter" id="sorter" onChange={() => handleChange()}>
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>
    </div>
  )
};

export default Sorter;