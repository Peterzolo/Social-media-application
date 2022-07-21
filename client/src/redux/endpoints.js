

import axios from "axios"
const url = "http://localhost:5000/api"

const API = axios.create({baseURL : url})

// USER ENDPOINTS
export const setLogin =(formData) => API.post("/user/login", formData)
export const setRegister =(formData) => API.post("/user/register", formData)


// UPLOAD ENDPOINT

export const setUpload =(data) => API.post("/upload/create", data)