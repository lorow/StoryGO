import { SuccessEditingSubPage, LinkEditingSubPage, FinishingEditingSubPage } from './subpages';

const subRoutes = [
  // { path: '/generate', Component: LinkEditingSubPage },
  { path: '/generate/edit', Component: LinkEditingSubPage },
  { path: '/generate/finish', Component: FinishingEditingSubPage },
  { path: '/generate/success', Component: SuccessEditingSubPage },
]

export default subRoutes;