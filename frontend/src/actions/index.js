export const LinkAdded = (linkPayload) => ({
  type: 'ADDED_LINK_TO_LIST',
  payload: linkPayload
})

export const LinkRemoved = (linkPayload) => ({
  type: 'REMOVED_LINK_FROM_LIST',
  payload: linkPayload
})

export const LinkUpdated = (linkPayload) => ({
  type: 'UPDATED_LINK',
  payload: linkPayload
})