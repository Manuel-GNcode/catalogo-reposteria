import {Header} from './components/Header.tsx'
import {Footer} from './components/Footer.tsx'
import {Hero} from './components/Hero.tsx'
import { NavBar } from './components/NavBar.tsx'
import { Route, Routes } from 'react-router-dom'
import { Sopas} from './pages/Sopas.tsx'
import { Desayunos } from './pages/Desayunos.tsx'
import { Postres } from './pages/Postres.tsx'

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Desayunos />}></Route>
        <Route path='/sopas' element={<Sopas />}></Route>
        <Route path='/postres' element={<Postres />}></Route>
        <Route path='/*' element={<Desayunos />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
