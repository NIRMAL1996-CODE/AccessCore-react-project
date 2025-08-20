import React from 'react'
import Header from "../TaskAndOthers/Header";
import CreateTask from '../TaskAndOthers/CreateTask';
import AllTask from '../TaskAndOthers/AllTask';
const AdminDashboard = () => {
  return (
    <>
    <Header/>
    <CreateTask/>
    <AllTask/>
    </>
  )
}

export default AdminDashboard