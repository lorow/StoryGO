let nextLinkID = 0

export const Addlink = (payload) => ({
  type: 'ADDED_LINK_TO_LIST',
  id: nextLinkID++,
  payload: payload
})

export const RemoveLink = (id) => ({
  type: 'REMOVED_LINK_FROM_LIST',
  id
})

export const UpdateLink = (id, payload) => ({
  type: 'UPDATED_LINK',
  payload: payload,
  id
})