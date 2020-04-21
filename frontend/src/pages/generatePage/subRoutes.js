import { SuccessEditingSubPage, LinkEditingSubPage, CoverDefiningPage } from './subpages';

const subRoutes = [
  { path: '/generate/edit', Component: LinkEditingSubPage },
  { path: '/generate/cover', Component: CoverDefiningPage },
  { path: '/generate/success', Component: SuccessEditingSubPage },
]

export default subRoutes;