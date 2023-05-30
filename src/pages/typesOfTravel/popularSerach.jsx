import React from 'react'

export default function popularSearch() {
  return (
    <>
      <div className="container my-4">
        <h5 className="d-flex justify-content-center">Popular Search</h5>
      </div>

      <div className="container text-center w-75">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      <div class="col">
        <button type="button" className="btn btn-outline-dark effectButton">Jhon Doe</button>
      </div>
      <div class="col">
        <button type="button" className="btn btn-outline-dark effectButton">Jhon Doe</button>
        </div>
        <div class="col">
        <button type="button" className="btn btn-outline-dark effectButton">Jhon Do</button></div>
        <div class="col">
        <button type="button" className="btn btn-outline-dark effectButton">Jhon Doeee</button></div>
        <div class="col">
        <button type="button" className="btn btn-outline-dark effectButton">Jhon Doee</button></div>
      </div>
      </div>
      <div className="container text-center my-4 w-75">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div class="col">
          <button type="button" className="btn btn-outline-dark effectButton">Jhon Do</button></div>
          <div class="col">
          <button type="button" className="btn btn-outline-dark effectButton">Jhon Doeee</button></div>
          <div class="col">
          <button type="button" className="btn btn-outline-dark effectButton">Jhon Do</button></div>
          <div class="col">
          <button type="button" className="btn btn-outline-dark effectButton">Jhon Doee</button></div>
          <div class="col">
          <button type="button" className="btn btn-outline-dark effectButton">Jhon Doe</button></div>
          </div>
      </div>
    </>
  )
}
