import {Header} from './components/Header/Header.tsx'
import {Footer} from './components/Footer/Footer.tsx'
import {Hero} from './components/Hero/Hero.tsx'
import { Principal } from './components/Principal/Principal.tsx'
import { Suscribete } from './components/Suscribete/Suscribete.tsx'

import {SmoothScroll} from './SmoothScroll.tsx'

function App() {

  return (
    <SmoothScroll>
      <Header></Header>
      <Hero></Hero>
      <Principal></Principal>
      <Suscribete></Suscribete>
      <Footer></Footer>
    </SmoothScroll>
  );
}

export default App;
