import react, { useState, useEffect } from "react";
import { getVideos } from "../core/helper/apicall";

const Navbar = () => {
    const [videos, setVideos] = useState([]);

    const loadAllVideos = () => {
        getVideos(0, 200).then(data => {
            let arr = [];
            let count = 0;
            while (count < 2) {
                let genRandom = Math.floor(Math.random() * (200 - 1) + 1);
                arr.push(data.result.docs[genRandom - 1])
                count++;
            }
            setVideos(arr);
        })
    }

    const playVideos = () => {
        let videos = document.querySelectorAll('.compare-video video');
        [...videos].forEach(video => video.play())
    }
    
    const pauseVideos = () => {
        let videos = document.querySelectorAll('.compare-video video');
        [...videos].forEach(video => video.pause())
    }

    const resutVideos = () => {
        let videos = document.querySelectorAll('.compare-video video');
        [...videos].forEach(video => video.currentTime = 0)
    }

    useEffect(() => {
        loadAllVideos();
    }, [])

    return (
        <>
            <nav className="navbar navbar-light bg-white sticky-top">
                <div className="container">
                    <p className="navbar-brand remove-margin">
                        Video Feeds
                </p>
                    <p className="remove-margin pr-4 btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fas fa-photo-video"></i> Compare Videos
                    </p>
                </div>
            </nav>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Compare these videos</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="compare-video d-flex justify-content-around">
                                {
                                    videos.length > 0 ? (
                                        videos.map((video) => {
                                            return (
                                                <div key={video.count} className="">
                                                    <div className="campare-card border">
                                                        <p className="mt-2 mx-2">Video No:  {video.count} - User Id: { video.user_id}</p>
                                                        <video controls>
                                                            <source src={video.video_url} />
                                                        </video>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    ) : "Sorry not found any video"
                                }
                            </div>
                        </div>
                        <div class="modal-footer">

                            <button onClick={playVideos} type="button" class="btn btn-secondary">Play Videos</button>
                            <button onClick={pauseVideos} type="button" class="btn btn-secondary">Pause Videos</button>
                            <button onClick={resutVideos} type="button" class="btn btn-secondary">Reset Videos</button>
                            <button onClick={loadAllVideos} type="button" class="btn btn-primary">Genarate Ramdom Videos</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Navbar