const VideoFeeds = ({ videos }) => {
    return (
        <>
            {
                videos.length > 0 ? (
                    videos.map((video) => {
                        return (
                            <div key={video.count} className="bg-white container-fluid mb-2 border">
                                <div className="feed-card">
                                    <div className="feed-header mt-3 mb-2">
                                        <div className="feed-user d-flex align-items-center">
                                            <div className="avatar">
                                                <img src="https://phoenixprotection.bb/wp-content/uploads/2018/02/depositphotos_39258205-stock-illustration-businessman-avatar-profile-picture.jpg" />
                                            </div>
                                            <div className="heading ">
                                                <h5 className="m-0">Parturient Montes</h5>
                                                <p className="m-0">Aliquam dui odio, consectetur tellus.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="feed-video">
                                        <video controls>
                                            <source src={video.video_url} />
                                        </video>
                                    </div>
                                    <hr />
                                    <div className="feed-details d-flex align-items-center justify-content-between mb-3">
                                        <div className="icon"><i class="fas fa-hand-paper"></i> {video.count} </div>
                                        <div className="icon"><i class="fas fa-user-tie"></i> {video.user_id} </div>
                                        <div className="icon"><i class="fas fa-video"></i> {video.duration} </div>
                                        <div className="icon"><i class="fas fa-users"></i> {video.team_id} </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : "Sorry not found any video"
            }
        </>
    )
}


export default VideoFeeds;