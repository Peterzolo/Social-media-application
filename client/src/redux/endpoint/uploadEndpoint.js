
import axios from "axios"
const url = "http://localhost:5000/api"

const API = axios.create({baseURL : url})

// UPLOAD ENDPOINT

export const setUpload =(data) => API.post("/upload/create", data)


export const setUploadPost = (data) => API.post("/upload/posts", data);