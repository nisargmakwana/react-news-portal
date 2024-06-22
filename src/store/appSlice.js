import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = "a234f1dad00c4e4990f6467a5a48620b";

export const fetchArticles = createAsyncThunk(
	"articles/fetchArticles",
	async ({ category, currentPage }) => {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${currentPage}&technology&apiKey=a234f1dad00c4e4990f6467a5a48620b`
		);
		const data = await response.json();
		console.log(data);
		return data.articles;
	}
);

const articlesSlice = createSlice({
	name: "articles",
	initialState: {
		articles: [],
		category: "",
		currentPage: 1,
		loading: false,
		error: null,
		curArticle: {},
	},
	reducers: {
		setCategory(state, action) {
			state.category = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setCurrentArticle(state, action) {
			state.curArticle = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticles.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchArticles.fulfilled, (state, action) => {
				state.articles = action.payload;
				state.loading = false;
			})
			.addCase(fetchArticles.rejected, (state, action) => {
				state.error = action.error.message;
				state.loading = false;
			});
	},
});

export const { setCategory, setCurrentPage, setCurrentArticle } =
	articlesSlice.actions;
export default articlesSlice.reducer;
