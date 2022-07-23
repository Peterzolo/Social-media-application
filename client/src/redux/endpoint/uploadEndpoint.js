
import axios from "axios"
const url = "http://localhost:5000/api"

const API = axios.create({baseURL : url})

// UPLOAD ENDPOINT

export const setUpload =(FormData) => API.post("/upload/create", FormData)


