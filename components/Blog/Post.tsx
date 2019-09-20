import React from 'react';


const Post = ({text, src, date, title}) => {
  const DateObject = new Date(date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div>
      <h2>{title}</h2>
      <div>{date && DateObject.toLocaleDateString('en-EN', options)}</div>
      <img src={src && `https://upply-interview.herokuapp.com/images/${src}`} alt="post image"/>
      <p>{text}</p>
    </div>
  )
};

export default Post