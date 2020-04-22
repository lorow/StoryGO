const InitialState = {
  title: "",
  cover: "no_cover",
}

export const pageReducer = (state = InitialState, action) => {
  console.log(action)
  switch (action.type) {

    case "SET_COVER_TITLE":
      return {
        ...state,
        title: action.payload,
      }

    case "SET_COVER_MINIATURE":
      return {
        ...state,
        cover: action.payload
      }

    default: return state;
  }
}