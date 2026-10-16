import { useState } from 'react'
import IntroScreen from './components/IntroScreen'
import MusicPlayer from './components/MusicPlayer'
import WishSection from './components/WishSection'
import LoveLetter from './components/LoveLetter'
import PhotoMemories from './components/PhotoMemories'
import FlowerGarden from './components/FlowerGarden'
import WishCards from './components/WishCards'
import FinalSurprise from './components/FinalSurprise'
import FloatingHearts from './components/effects/FloatingHearts'
import Petals from './components/effects/Petals'

export default function App() {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => setOpened(true)

  return (
    <>
      {!opened && <IntroScreen onOpen={handleOpen} />}

      {opened && (
        <main className="site">
          <MusicPlayer />
          <FloatingHearts />
          <Petals />
          <WishSection />
          <LoveLetter />
          <PhotoMemories />
          <FlowerGarden />
          <WishCards />
          <FinalSurprise />
        </main>
      )}
    </>
  )
}
