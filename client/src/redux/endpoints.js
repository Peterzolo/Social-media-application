import axios from "axios";

const devEnv = process.env.NODE_ENV !== "production";
console.log("DEV ENV", devEnv);

const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

const Api = axios.create({
  baseURL: `${devEnv ? REACT_APP_DEV_API : REACT_APP_PROD_API}`,
});

// const Api = axios.create({ baseURL: "http://localhost:5000/api" });
// const Api = axios.create({ baseURL: "https://event-look-up.herokuapp.com/api" });

Api.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).data.token
    }`;
  }
  return req;
});

export const signIn = (formData) => Api.post("/user/login", formData);

export const signUp = (formData) => Api.post("/user/register", formData);

export const createEvent = (eventData) => Api.post("/event/create", eventData);

// export const getAllEvents = () => Api.get("/event/fetch-all");
export const getAllEvents = (page) => Api.get(`/event/fetch-all?page=${page}`);

export const getEvent = (id) => Api.get(`/event/fetch-one/${id}`);
export const deleteEvent = (id) => Api.delete(`/event/remove/${id}`);
export const updateEvent = (updatedEventdata, id) =>
  Api.put(`/event/edit/${id}`, updatedEventdata);
export const getEventByUser = (userId) =>
  Api.get(`/event/fetch-user-event/${userId}`);

export const getEventsBySearch = (searchQuery) =>
  Api.get(`/event/search?searchQuery=${searchQuery}`);

export const getEventsByTags = (tag) => Api.get(`/event/tag/${tag}`);
export const getRelatedEvents = (tags) =>
  Api.post(`/event/related-events`, tags);
export const eventLike = (id) => Api.patch(`/event/like/${id}`);
