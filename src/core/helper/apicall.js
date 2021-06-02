const API = process.env.APLI_URL || 'http://localhost:8848';


// get all the videos
export const getVideos = (page, pageSize=10) => {
    return fetch(`${API}/api/videos?_page=${page}&_pageSize=${pageSize}`, { Method: "GET" })
        .then((response => response.json()))
        .catch(err => console.log(err))
};

// get videos by duration
export const getByVideoDuration = (duration) => {
    return fetch(`${API}/api/videos?max_duration=${duration}&_pageSize=15`, { Method: "GET" })
        .then((response => response.json()))
        .catch(err => console.log(err))
};

// get videos by user Id
export const getbyUserId= (user_id) => {
    return fetch(`${API}/api/videos?user_id=${user_id}&_pageSize=15`, { Method: "GET" })
        .then((response => response.json()))
        .catch(err => console.log(err))
};

// get videos by team Id
export const getByTeamId = (team_id) => {
    return fetch(`${API}/api/videos?team_id=${team_id}&_pageSize=15`, { Method: "GET" })
        .then((response => response.json()))
        .catch(err => console.log(err))
};

