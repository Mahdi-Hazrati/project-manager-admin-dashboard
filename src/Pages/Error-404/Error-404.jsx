import React from 'react'
import { useRouteError } from "react-router-dom"
import "./Error-404.css"

const Error404 = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className="error-404-page">
      <h1>{error.status}</h1>
      <p>مسیر مورد نظر پیدا نشد.</p>
      <p className="error-message">
        {error.statusText}
      </p>
    </div>
  )
}

export default Error404