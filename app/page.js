import Navbar from '../components/Navbar.jsx';
import Main from '../components/Main.jsx';
import About from '../components/About.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '@/components/Contact.jsx';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Main />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}