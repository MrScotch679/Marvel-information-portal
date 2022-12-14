import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicPage = lazy(() => import("../pages/singleComicPage/SingleComicPage"));
const SingleCharacterPage = lazy(() => import("../pages/singleCharacterPage/SingleCharacterPage"));

const App = () => {
  return (
    <HashRouter basename="">
      <div className="app">
        <AppHeader/>
        <main>
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="/characters/:characterName" element={<SingleCharacterPage />}/>
              <Route path="/comics" element={<ComicsPage/>}/>
              <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
              <Route path="*" element={<Page404/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
    </HashRouter>
  )
}

export default App;