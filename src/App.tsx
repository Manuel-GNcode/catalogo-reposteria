import {Header} from './components/Header.tsx'
import {Footer} from './components/Footer.tsx'
import {Hero} from './components/Hero.tsx'
import { NavBar } from './components/NavBar.tsx'
import { CatalogoList } from './components/CatalogoList.tsx'
import { useState } from 'react'
import { CatalogoItem } from './assets/database.ts'

function App() {
  const [cat, setCat] = useState<CatalogoItem[]>([]);

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <NavBar handleCat={setCat}></NavBar>
      <CatalogoList foodList={cat}></CatalogoList>
      <Footer></Footer>
    </>
  );
}

export default App;
