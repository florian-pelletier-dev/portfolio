import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import Home from './components/Home.jsx';
import ConlangArchive from './components/ConlangArchive.jsx';
import Ticketer from './components/Ticketer.jsx';
import Fil from './components/Fil.jsx';
import CharteGraphique from './sectionComponents/filComponents/charteGraphique.jsx';
import LigneEditoriale from './sectionComponents/filComponents/ligneEditoriale.jsx';
import AxeCommunication from './sectionComponents/filComponents/axeCommunication.jsx';
import SiteWeb from './sectionComponents/filComponents/siteWeb.jsx';
import RetroMiam from './components/RetroMiam.jsx';

import gsap from 'gsap';
import {ReactLenis} from 'lenis/react';
import { useEffect, useRef } from 'react';

function App() {

  const lenisRef = useRef();
  const location = useLocation();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  // scroll to top on page changes
  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  // scroll to top on reload
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    const timeout = setTimeout(() => {
      lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
    }, 100); // 100ms is enough

    return () => clearTimeout(timeout);
  }, []);

  return (
      <>
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='conlang-archive' element={<ConlangArchive />} />
          <Route path='ticketer' element={<Ticketer />} />
          <Route path='au-fil-d-elbeuf' element={<Fil />}>
            <Route index element={<CharteGraphique />} />
            <Route path='charte-graphique' element={<CharteGraphique />} />
            <Route path='ligne-editoriale' element={<LigneEditoriale />} />
            <Route path='axe-communication' element={<AxeCommunication />} />
            <Route path='site-web' element={<SiteWeb />} />
          </Route>
          <Route path='retro-miam' element={<RetroMiam />}/>
        </Routes>
      </>
  );
}

export default App
