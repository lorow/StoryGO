let id = 0;

const InitialState = [
  { id: id, link: "", linkType: { type: "new_story", data: null, }, hasAddedNext: false },
]

export const linksReducer = (state = InitialState, action) => {
  console.log(action, state)
  switch (action.type) {
    case 'ADD_LINK_TO_LIST':
      id += 1;
      return [
        ...state,
        { id: id, link: "", linkType: { type: "new_story", data: null, } }
      ]

    case 'REMOVE_LINK_FROM_LIST':
      return state.filter(link => (link.id !== action.payload))

    case 'UPDATE_LINK':
      return state.map(link => link.id === action.payload.id ? { ...link, ...action.payload.data } : link)

    default: return state
  }
}