import React,{ useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function UserCard({user, index}) {
  const history = useHistory()

  function getDetail(email) {
    history.push(`/detail/${email}`)
  }
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
          <div>
            <button type="button" className="btn btn-info" onClick={() => {getDetail(user.email)}}>Detail</button>
          </div>
        </footer>
    </div>
  )
}
