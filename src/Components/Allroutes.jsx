import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from '../Pages/Signup'
import Login from '../Pages/Login'
import { Home } from '../Pages/Home'
import { CreateBlog } from '../Pages/CreateBlog'
import { ViewBlog } from '../Pages/ViewBlog'
import { UpdateBlog } from '../Pages/Update'
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createblog' element={<CreateBlog/>}/>
        <Route path='/viewblog' element={<ViewBlog/>}/>
        <Route path='/updateblog/:id' element={<UpdateBlog/>}/>
        
      </Routes>
    </div>
  )
}

export default AllRoutes