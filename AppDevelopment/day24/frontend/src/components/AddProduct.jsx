import React from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
function AddProduct() {
  return (
    <>
    {/* <Dashboard/> */}
    <Navbar/>
   <Sidebar/>

    <div className="text-center">
        <div className="font-bold">
       <button>AddProduct</button>
        </div>
    </div>

    </>
  )
}

export default AddProduct