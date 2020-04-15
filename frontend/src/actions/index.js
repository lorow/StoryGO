export const Addlink = (payload) => ({
  type: 'ADDE_LINK_TO_LIST',
  id: nextLinkID++,
  payload: payload
})

export const RemoveLink = (id) => ({
  type: 'REMOVE_LINK_FROM_LIST',
  id
})

export const UpdateLink = (id, payload) => ({
  type: 'UPDATE_LINK',
  payload: payload,
  id
})