export const links = (state = [], action) => {
  switch (action.type) {

    case 'ADDE_LINK_TO_LIST':
      return [
        ...state,
        {
          id: action.id,
          ...action.payload
        }
      ]

    case 'REMOVE_LINK_FROM_LIST':
      return state.filter(link => (link.id !== action.id))

    case 'UPDATE_LINK':
      return state.map(link => link.id === action.id ? { ...action.payload } : link)

    default: return state
  }
}