const Reducer = (state, action) => {
    switch (action.type) {
      case "GET_DENTISTS":
        return { ...state, dentists: action.payload };
  
      case "ADD_FAV":
        return { ...state, favs: [...state.favs, action.payload] };
  
      case "TOGGLE_THEME":
        return { ...state, theme: !state.theme };
  
      case "REMOVE_FAV":
        const filterFavs = state.favs.filter(
          (fav) => fav.id !== action.payload.id
        );
        return { ...state, favs: filterFavs };
  
      default:
        return state;
    }
  };
  
  export default Reducer;