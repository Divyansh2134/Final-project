import React from 'react'

export default function arts() {
    return (
        <div className="categoriesBackground my-5">
            <div className="container w-75">
                <div className="row justify-content-between">
                    <div className="col-4">
                        <div className="p-2 mt-5">
                            <h2>Arts</h2>
                        </div>
                        <div className="p-2">
                            <p>Originally from Latin, Lorem ipsum has no intelligible meaning. Originally from Latin, Lorem ipsum has no intelligible meaning.
                            </p>
                        </div>
                    </div>
                    <div className="col-4 mt-5">
                        <div className="row row-cols-auto my-2">
                            <div className="col">
                                <button type="button" className="btn btn-outline-dark categoriesArrowButton effectButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg></button>
                            </div>
                            <div className="col">
                                <button type="button" className=" mx-3 btn btn-outline-dark categoriesArrowButton effectButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center w-75">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div className="col">
                        <img src="./images/media/temple1.jpg" className="img-thumbnail categoriesCardImg effect" alt="..." /></div>
                    <div className="col">
                        <img src="./images/media/temple2.jpg" className="img-thumbnail categoriesCardImg effect" alt="..." /></div>
                    <div className="col">
                        <img src="./images/media/temple3.jpg" className="img-thumbnail categoriesCardImg effect" alt="..." /></div>
                    <div className="col">
                        <img src="./images/media/temple4.jpg" className="img-thumbnail categoriesCardImg effect" alt="..." /></div>
                    <div className="col">
                        <img src="./images/media/temple5.jpg" className="img-thumbnail categoriesCardImg effect" alt="..." /></div>
                </div>
            </div>
            <div className="container text-center py-3 w-75">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div className="col">
                        <h6>Temple</h6></div>
                    <div className="col">
                        <h6>Temple</h6></div>
                    <div className="col">
                        <h6>Temple</h6></div>
                    <div className="col">
                        <h6>Temple</h6></div>
                    <div className="col">
                        <h6>Temple</h6></div>
                </div>
            </div>
        </div>
    )
}
