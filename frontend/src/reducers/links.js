export const links = (state = [{ id: 0, link: "", entryType: { type: "", data: null, }, state: 'solid' }], action) => {
  // NOTE: if a link can have to states:
  // solid - can be deleted only by user
  // temporary - it's the automatically added one, 
  // can be deleted if the latest field is no longer being edited and has no text in it
  console.log(action)
  switch (action.type) {

    case 'ADDE_LINK_TO_LIST':
      return [
        ...state,
        {
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