// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "../endpoints";

// export const createEventAction = createAsyncThunk(
//   "event/createEvent",
//   async ({ updatedEventData, navigate, toast }, { rejectWithValue }) => {
//     try {
//       const response = await api.createEvent(updatedEventData);
//       toast.success("Event successfully created");
//       navigate("/");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data || error.message || error);
//     }
//   }
// );

// export const getAllEventsAction = createAsyncThunk(
//   "event/getAllEvents",
//   async (page, { rejectWithValue }) => {
//     try {
//       const response = await api.getAllEvents(page);

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data || error.message || error);
//     }
//   }
// );

// export const getEventAction = createAsyncThunk(
//   "event/getEvent",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await api.getEvent(id);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data || error.message || error);
//     }
//   }
// );
// export const getEventByUserAction = createAsyncThunk(
//   "event/getEventByUser",
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await api.getEventByUser(userId);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data || error.message || error);
//     }
//   }
// );

// export const deleteEventAction = createAsyncThunk(
//   "event/deleteEvent",
//   async ({ id, toast }, { rejectWithValue }) => {
//     try {
//       const response = await api.deleteEvent(id);
//       toast.success("Event successfully deleted");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data || error.message || error);
//     }
//   }
// );

// export const updateEventAction = createAsyncThunk(
//   "event/updateEvent",
//   async ({ id, updatedEventData, toast, navigate }, { rejectWithValue }) => {
//     try {
//       const response = await api.updateEvent(updatedEventData, id);
//       toast.success("Event successfully updated");
//       navigate("/");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data || error.message || error);
//     }
//   }
// );

// export const searchEventAction = createAsyncThunk(
//   "tour/searchEvents",
//   async (searchQuery, { rejectWithValue }) => {
//     try {
//       const response = await api.getEventsBySearch(searchQuery);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const getEventByTagsAction = createAsyncThunk(
//   "event/getEventTag",
//   async (tag, { rejectWithValue }) => {
//     try {
//       const response = await api.getEventsByTags(tag);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data || error.message || error);
//     }
//   }
// );
// export const getRelatedEventsAction = createAsyncThunk(
//   "event/getRelatedEvents",
//   async (tags, { rejectWithValue }) => {
//     try {
//       const response = await api.getRelatedEvents(tags);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data || error.message || error);
//     }
//   }
// );
// export const getLikesAction = createAsyncThunk(
//   "event/getEventlike",
//   async ({ _id }, { rejectWithValue }) => {
//     try {
//       const response = await api.eventLike(_id);
//       console.log("RESPONSE", response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data || error.message || error);
//     }
//   }
// );

// const eventSlice = createSlice({
//   name: "event",
//   initialState: {
//     event: {},
//     events: [],
//     userEvents: [],
//     eventTags: [],
//     relatedEvents: [],
//     currentPage: 1,
//     numberOfPages: null,
//     error: "",
//     isLoading: false,
//   },

//   reducers: {
//     setCurrentPage: (state, action) => {
//       state.currentPage = action.payload;
//     },
//   },

//   extraReducers: {
//     [createEventAction.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [createEventAction.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.events = [action.payload];
//     },
//     [createEventAction.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload.message;
//     },
//     [getAllEventsAction.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [getAllEventsAction.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.events = action.payload.data;
//       state.numberOfPages = action.payload.numberOfPages;
//       state.currentPage = action.payload.currentPage;
//     },
//     [getAllEventsAction.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload.message;
//     },
//     [getEventAction.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [getEventAction.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.event = action.payload;
//     },
//     [getEventAction.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload.message;
//     },
//     [getEventByUserAction.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [getEventByUserAction.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.userEvents = action.payload;
//     },
//     [getEventByUserAction.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload.message;
//     },
//     [deleteEventAction.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [deleteEventAction.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       const {
//         arg: { id },
//       } = action.meta;
//       if (id) {
//         state.userEvents =
//           state.userEvents &&
//           state.userEvents?.data?.filter((item) => item._id !== id);
//         state.events = state?.events?.data?.filter((item) => item._id !== id);
//       }
//       state.userEvents = action.payload;
//     },
//     [deleteEventAction.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload.message;
//     },

//     [updateEventAction.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [updateEventAction.fulfilled]: (state, action) => {
//       state.isLoading = false;

//       const {
//         arg: { id },
//       } = action.meta;
//       if (id) {
//         state.userEvents = state?.userEvents?.data.map((item) =>
//           item._id === id ? action.payload : item
//         );
//         state.events = state?.events?.data.map((item) =>
//           item._id === id ? action.payload : item
//         );
//       }
//     },
//     [updateEventAction.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     },

//     [searchEventAction.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [searchEventAction.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.events = action.payload;
//     },
//     [searchEventAction.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     },

//     [getEventByTagsAction.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [getEventByTagsAction.fulfilled]: (state, action) => {
//       state.isLoading = false;

//       state.eventTags = action.payload;
//     },
//     [getEventByTagsAction.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload.message;
//     },
//     [getRelatedEventsAction.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [getRelatedEventsAction.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.relatedEvents = action.payload;
//     },
//     [getRelatedEventsAction.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload.message;
//     },

//     [getLikesAction.pending]: (state, action) => {},
//     [getLikesAction.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       const {
//         arg: { _id },
//       } = action.meta;
//       if (_id) {
//         state.events = state?.events?.data?.map((item) =>
//           item._id === _id ? action.payload : item
//         );
//       }
//     },
//     [getLikesAction.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload.message;
//     },
//   },
// });

// export const { setCurrentPage } = eventSlice.actions;

// export default eventSlice.reducer;
