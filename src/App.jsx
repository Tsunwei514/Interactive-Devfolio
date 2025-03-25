import { Outlet } from 'react-router-dom'
import Nav from './components/NavTabs.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    <Footer />
    </>
  );
}

export default App
