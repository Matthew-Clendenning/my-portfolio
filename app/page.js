import Navbar from '../components/Navbar.jsx'
import Main from '../components/Main.jsx'
import About from '../components/About.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Main />
        <About />
      </main>
    </>
  )
}