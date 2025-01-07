import React from 'react'

const Spinner = () => {
  return (
<div className="d-flex justify-content-center" style={{position : "fixed", top : "18%",}}>
  <div className="spinner-border" role="status" style={{ height : "100px", width : "100px", }}>
  <span className="visually-hidden">Loading...</span>

  </div>
</div>  )
}

export default Spinner