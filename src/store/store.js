import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./appSlice";

const store = configureStore({
	reducer: {
		articles: articlesReducer,
	},
});

export default store;
