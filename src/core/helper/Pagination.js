const Pagination = ({videos, prevPage, currentPage, nextPage, prev, next }) => {
    return (
        <>
            {videos.length > 0 && prevPage !== null ? (
                <div onClick={prev} className="pagination-btn d-flex justify-content-center align-items-center btn border">
                    <i className="fas fa-chevron-left"></i>
                </div>
            ) : <div className="pagination-btn d-flex justify-content-center align-items-center mr-2 disabled btn border">
                <i className="fas fa-chevron-left"></i>
            </div>
            }

 
            {videos.length > 0 && currentPage !== null ? (
                <div className="pagination-btn d-flex justify-content-center align-items-center mx-2 btn currentPage border">
                    {currentPage}
                </div>
            ) : ""}


            {videos.length > 0 && nextPage !== null ? (
                <div onClick={next} className="pagination-btn d-flex justify-content-center  align-items-center btn border">
                    <i className="fas fa-chevron-right"></i>
                </div>
            ) : <div className="pagination-btn d-flex justify-content-center align-items-center disabled btn border">
                <i className="fas fa-chevron-right"></i>
            </div>
            }
        </>
    )
}

export default Pagination;

