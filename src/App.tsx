import { NavList } from "./constant/constant"
import { useSectionRefs } from "./hook/useSectionRefs"
import Ending from "./pages/Ending"
import Gallery from "./pages/Gallery"
import Hero from "./pages/Hero"
import Nav from "./pages/Nav"
import Section1 from "./pages/Section1"

function App() {

  const sectionRefs = useSectionRefs(NavList)

  const scrollToSection = (sectionkey: string) => {
    const sectionRef = sectionRefs[sectionkey]

    if (sectionkey && sectionRef.current) {
      sectionRef.current.scrollIntoView(({
        behavior: 'smooth',
        block: 'start'
      }))

    }
  }

  return (
    <>
      <Nav onNavClick={scrollToSection} navlist={NavList} />
      <div ref={sectionRefs['home']} id='home'>
        <Hero />
      </div>
      <Section1 />
      <div ref={sectionRefs['gallery']} id='gallery'>
        <Gallery />
      </div>
      <Ending />
    </>
  )
}

export default App
