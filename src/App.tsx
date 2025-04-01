import {Header} from './components/Header.tsx'
import {Footer} from './components/Footer.tsx'
import {Hero} from './components/Hero.tsx'
import { NavBar } from './components/NavBar.tsx'
import { Route, Routes } from 'react-router-dom'
import { Desserts } from './pages/Desserts.tsx'
import { Drinks } from './pages/Drinks.tsx'
import { Others } from './pages/others.tsx'

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Desserts />}></Route>
        <Route path='/drinks' element={<Drinks />}></Route>
        <Route path='/others' element={<Others />}></Route>
        <Route path='/*' element={<Desserts />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
