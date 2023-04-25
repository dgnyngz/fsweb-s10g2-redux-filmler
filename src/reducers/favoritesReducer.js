import {
  REMOVE_FAVORITE,
  ADD_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions";

const initialState = {
  favourites: [],
  displayFavourites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
