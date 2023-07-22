import React from 'react';

export default function Card(props) {
  return (
    <div>
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img
          src={props.img}
          alt="avatar_img"
          className="circle-img"
        />
      </div>
      <div className="bottom">
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}