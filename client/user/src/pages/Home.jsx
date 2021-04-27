import React,{ useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../styles/Home.css'
import UserCard from '../components/UserCard'
import { getUsers } from '../store/action'

export default function Home() {
  const users = useSelector(state => state.users)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div>
      <div className="container">
        <div className="col-md-12 col-lg-12 col-sm-12" style={{padding: 100}}>
          {
            loading ? <h1>loading</h1> :
            users?.map((user, index) => {
              return <UserCard user={user} key={index} ></UserCard>
            })
          }
        </div>
      </div>
    </div>

  )
}
