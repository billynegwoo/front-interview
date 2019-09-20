import React, {useRef} from 'react'

const SearchBar = ({handleSearch}) => {
  const inputRef = useRef();
  function handleClick() {
    // @ts-ignore
    handleSearch(inputRef.current.value)
  }

  return(
    <div>
      <input ref={inputRef} type="text"/>
      <button onClick={() => handleClick()}>search</button>
    </div>
  )
};


export default SearchBar;