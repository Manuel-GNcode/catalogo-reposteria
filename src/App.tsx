import {Header} from './components/Header/Header.tsx'
import {Footer} from './components/Footer/Footer.tsx'
import {Hero} from './components/Hero/Hero.tsx'
import { Principal } from './components/Principal/Principal.tsx'
import { Suscribete } from './components/Suscribete/Suscribete.tsx'

function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Principal></Principal>
      <Suscribete></Suscribete>
      <Footer></Footer>
    </>
  );
}

export default App;
