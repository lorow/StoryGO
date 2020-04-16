export const Addlink = (payload) => ({
  type: 'ADDE_LINK_TO_LIST',
  payload: payload
})

export const RemoveLink = (payload) => ({
  type: 'REMOVE_LINK_FROM_LIST',
  payload
})

export const UpdateLink = (payload) => ({
  type: 'UPDATE_LINK',
  payload: payload,
})

export const AddTemporaryLinkEntry = () => ({
  type: "ADD_TEMP_ENTRY",
})

export const RemoveTemporaryLinkEntry = () => ({
  type: "REMOVE_TEMP_ENTRY",
})