import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='md:mx-[96px]'>
        <Main />
        <About />
      </main>
    </>
  )
}
