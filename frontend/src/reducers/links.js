const id = 0;

export const links = (state = [{ id: id, link: "", entryType: { type: "", data: null, }, state: 'solid' }], action) => {
  // NOTE: if a link can have to states:
  // solid - can be deleted only by user
  // temporary - it's the automatically added one, 
  // can be deleted if the latest field is no longer being edited and has no text in it
  console.log(action, state)
  switch (action.type) {
    case 'ADD_LINK_TO_LIST':
      return [
        ...state,
        {
          id: id + 1,
          ...action.payload
        }
      ]

    case 'REMOVE_LINK_FROM_LIST':
      return state.filter(link => (link.id !== action.payload))

    case 'UPDATE_LINK':
      return state.map(link => link.id === action.payload.id ? { ...action.payload } : link)

    default: return state
  }
}