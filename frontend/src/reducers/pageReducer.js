const InitialState = {
  title: "",
  cover: "no cover",
}

export const pageReducer = (state = InitialState, action) => {
  switch (action.type) {

    case "UPDATE_PAGE":
      return {
        ...state,
        ...action.payload
      }
    default: return state;
  }
}