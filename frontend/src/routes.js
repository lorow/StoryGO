import LandingPage from './pages/landingPage';
import GeneratePage from './pages/generatePage';
import AboutPage from './pages/aboutPage';


const routes = [
  { path: '/', name: 'Home', Component: LandingPage },
  { path: '/generate', name: 'Generate', Component: GeneratePage },
  { path: '/about', name: 'About', Component: AboutPage }
]

export default routes;