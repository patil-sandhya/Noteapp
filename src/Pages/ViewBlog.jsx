import React, { useEffect, useState } from 'react'
import Card from './Card'

export const ViewBlog = () => {
  const [state, setState] = useState([])

  useEffect(()=>{
    fetch("https://aggressive-cyan-crown.cyclic.app/note/notes", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.notes)
         setState(res.notes)
      })
      .catch((err) => console.log(err));
  },[])
  return (
    <div>ViewBlog
    {
      state.map((item)=>{
        return <Card {...item} />
      })
    }
    </div>
  )
}
