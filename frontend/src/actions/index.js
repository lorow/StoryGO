export const Addlink = () => ({
  type: 'ADD_LINK_TO_LIST',
})

export const RemoveLink = (id) => ({
  type: 'REMOVE_LINK_FROM_LIST',
  id
})

export const UpdateLink = ({ id, data }) => ({
  type: 'UPDATE_LINK',
  payload: { id, data },
})