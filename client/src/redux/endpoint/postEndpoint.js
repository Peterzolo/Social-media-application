

import axios from "axios"
const url = "http://localhost:5000/api"

const API = axios.create({baseURL : url})



export const setUploadPost = (formData) => API.post("/post/create", formData);