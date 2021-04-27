import React from 'react'

export default function UserCard({user}) {
  console.log(user);
  return (
    <div className="card b-1 hover-shadow mb-20">
      <div className="media card-body">
        <div className="media-left pr-12">
          <img className="avatar avatar-xl no-radius" src={user.picture.large} alt="..."/>
        </div>
        <div className="media-body">
          <div className="mb-2">
            <span className="fs-20 pr-16">{`${user.name.title} ${user.name.first} ${user.name.last}`}</span>
          </div>
          <small className="fs-16 fw-300 ls-1">Gender : {user.gender}</small><br/>
          <small className="fs-16 fw-300 ls-1">Email : {user.email}</small>
        </div>
      </div>
        <footer className="card-footer flexbox align-items-center">
          <div>
            <strong>Phone : </strong>
            <span>{user.phone}</span>
          </div>
        </footer>
    </div>
  )
}
