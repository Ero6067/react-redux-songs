import { combineReducers } from "redux";

const songReducer = () => {
	return [
		{ title: "No Scrubs", duration: "4:05" },
		{ title: "Macarena", duration: "2:30" },
		{ title: "All Star", duration: "3:14" },
		{ title: "I Want It That Way", duration: "1:45" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer
});
