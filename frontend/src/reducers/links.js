export const links = (state = [], action) => {
  switch (action.type) {

    case 'ADDED_LINK_TO_LIST':
      return [
        ...state,
        {
          id: action.id,
          ...action.payload
        }
      ]

    case 'REMOVED_LINK_FROM_LIST':
      return state.filter(link => (link.id !== action.id))

    case 'UPDATED_LINK':
      return state.map(link => link.id === action.id ? { ...action.payload } : link)

    default: return state
  }
}