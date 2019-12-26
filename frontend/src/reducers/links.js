export const links = (state = [], action) => {
  switch (action.type) {

    case 'ADDED_LINK_TO_LIST':
      return [
        ...state,
        action.payload
      ]

    case 'REMOVED_LINK_FROM_LIST':
      return [
        ...state.filter((link) => (
          link !== action.payload
        ))
      ]


    default: return state
  }
}