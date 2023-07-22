import React from 'react'
import Avatar from './Avatar.jsx'
import Detail from './Detail.jsx'

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          {/* <p>{props.id}</p> */}
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Detail dtl={props.tel} />
          <Detail dtl={props.email} />
        </div>
      </div>
    </div>
  )
}
