import react, { useState, useEffect } from "react";
import { getVideos, getByVideoDuration, getbyUserId, getByTeamId } from "../core/helper/apicall";
import Pagination from "./helper/Pagination";
import VideoFeeds from "./helper/VideoFeeds";


const Home = () => {
    const [videos, setVideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [error, SetError] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [duration, setDuration] = useState('');
    const [userId, setUserId] = useState('');
    const [teamId, setTeamId] = useState('');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 35) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    })

    const checkAndUpdate = (data) => {
        if (data.error) {
            SetError(data.error);
        } else {
            setVideos(data.result.docs);
            setCurrentPage(data.result.page);
            setPrevPage(data.result.prevPage);
            setNextPage(data.result.nextPage);
        }
    }

    const reset = () => {
        getVideos(1).then(data => {
            checkAndUpdate(data)
        })
    }


    const loadAllVideos = () => {
        getVideos(currentPage).then(data => {
            checkAndUpdate(data)
        })
    }

    const next = () => {
        getVideos(nextPage).then(data => {
            checkAndUpdate(data)
        })
    }

    const prev = () => {
        getVideos(prevPage).then(data => {
            checkAndUpdate(data)
        })
    }

    const byDuration = () => {
        getByVideoDuration(duration).then(data => {
            checkAndUpdate(data);
            setDuration('');
        })
    }

    const byUserId = () => {
        getbyUserId(userId).then(data => {
            checkAndUpdate(data);
            setUserId('');
        })
    }

    const byTeamId = () => {
        getByTeamId(teamId).then(data => {
            checkAndUpdate(data)
            setTeamId('');
        })
    }


    useEffect(() => {
        loadAllVideos();
    }, [])


    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-lg-3">
                    <div onClick={reset} className="bg-white container-fluid mb-2  p-2 border btn">Reset Pagination</div>
                    <div className="pagination justify-content-end text-center">
                        <Pagination
                            videos={videos}
                            prevPage={prevPage}
                            currentPage={currentPage}
                            nextPage={nextPage}
                            prev={prev}
                            next={next}
                        />
                    </div>
                </div>


                <div className="col-lg-5 col-sm-12">

                    <VideoFeeds videos={videos} />

                    <div className="pagination justify-content-end text-center">
                        <Pagination
                            videos={videos}
                            prevPage={prevPage}
                            currentPage={currentPage}
                            nextPage={nextPage}
                            prev={prev}
                            next={next}
                        />
                    </div>
                </div>

                <div className="col-lg-4 mo-first mb-3">
                    <div className="bg-white border">
                        <div className={scroll ? 'scroll-fixed' : 'display-none'}>
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab">Duration</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button class="nav-link " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" >User Id</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button class="nav-link " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab">Team Id</button>
                                </li>
                            </ul>
                            <div className="tab-content container mb-3" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                    <div className="form-text"><i class="fas fa-video"></i> : Search Video By Duration  </div>
                                    <div class="mb-3 mt-2">
                                        <input type="number"
                                            onChange={event => setDuration(event.target.value)}
                                            className="form-control"
                                            value={duration}
                                            placeholder="max duration is 55" />
                                    </div>
                                    <button
                                        onClick={byDuration}
                                        type="submit"
                                        className="btn btn-outline-secondary"
                                    >Submit</button>
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="form-text"><i class="fas fa-user-tie"></i> : Search Video By User Id  </div>
                                    <div class="mb-3 mt-2">
                                        <input type="number"
                                            onChange={event => setUserId(event.target.value)}
                                            className="form-control"
                                            value={userId}
                                            placeholder="max user Id is 16" />
                                    </div>
                                    <button
                                        onClick={byUserId}
                                        type="submit"
                                        className="btn btn-outline-secondary"
                                    >Submit</button>

                                </div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <div className="form-text"><i class="fas fa-users"></i>  : Search Video By Team Id  </div>
                                    <div class="mb-3 mt-2">
                                        <input type="number"
                                            onChange={event => setTeamId(event.target.value)}
                                            className="form-control"
                                            value={teamId}
                                            placeholder="max team id is 90" />
                                    </div>
                                    <button
                                        onClick={byTeamId}
                                        type="submit"
                                        className="btn btn-outline-secondary"
                                    >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home