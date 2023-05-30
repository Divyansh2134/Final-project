import React from 'react'

export default function search() {
  return (
    <>
    <div className="container d-flex justify-content-center py-4">
    <div classname="input-group">
  <input type="search" classname="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" classname="btn btn-outline-primary">search</button>
</div>
</div>
    </>
  )
}
