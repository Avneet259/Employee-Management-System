import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser')
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData])

  const loginHandler = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify({role:'epmloyee'}))
      }
    } else {
      alert('Invalid Credentials')
    }
  }

  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
