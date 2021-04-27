import React,{ useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment';
import '../styles/Detail.css'

export default function Detail() {
  const users = useSelector(state => state.users)
  const loading = useSelector(state => state.loading)
  const history = useHistory()
  const [data, setData] = useState({})
  const email = useParams()

  useEffect(() => {
    getOne(email)
  },[setData])

  if (loading){
    return <h1>loading</h1>
  }

  function getOne(value) {
    const email = value.email
    const userDetail = users.find(user => user.email === email)
    setData(userDetail)
  }

  function goHome() {
    history.push('/')
  }
  
  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src={data.picture?.medium} alt=""/>
            </div>
        </div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>
            {`${data.name?.first} ${data.name?.last}`}
            </h5>
            <h6>
              Username : {data.login?.username}
            </h6>
            <p className="profile-rating">Gender : {data?.gender}</p>
            <p className="profile-rating">Account age : {data.registered?.age} days</p>
          </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
          <div className="profile-work">
            <p>Contact</p>
            <a>Phone : {data?.phone}</a><br/>
            <a>Mobile : {data?.cell}</a><br/>
            <p>Address</p>
            <a>City : {data.location?.city}</a><br/>
            <a>Country : {data.location?.country}</a><br/>
            <a>State : {data.location?.state}</a><br/>
            {/* <a>Street : {`${data.location.street?.name} ${data.location.street?.number}`}</a><br/> */}
            <a>Postcode : {data.location?.postcode}</a><br/>
          </div>
        </div>
        <div className="col-md-8">
          <div className="tab-content profile-tab" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="row">
                <div className="col-md-6">
                  <label>Title</label>
                </div>
                <div className="col-md-6">
                  <p>{data.name?.title}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>First name</label>
                </div>
                <div className="col-md-6">
                  <p>{data.name?.first} </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Last name</label>
                </div>
                <div className="col-md-6">
                  <p>{data.name?.last}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>{data?.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Birthdate</label>
                </div>
                <div className="col-md-6">
                  <p><Moment format="D MMMM YYYY" withTitle>{data.dob?.date}</Moment></p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-end">
      <button type="button" class="btn btn-primary" onClick={() => goHome()}>Home</button>           
      </div>
    </div>
  )
}
