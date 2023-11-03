import { Route, Routes } from 'react-router-dom';



import { lazy } from 'react';
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { useSelector } from 'react-redux';
import { selectAdvertList } from './redux/selectors';

// const test = import.meta.env.VITE_API_TEST;
 const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const CataloguePage = lazy(() => import('./pages/CataloguePage/CataloguePage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

function App() {
  const adverts = useSelector(selectAdvertList);
  if (!adverts) return;

  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<MainPage />} /> 
          <Route path="/catalog" element={<CataloguePage adverts= {adverts}/>} />
          <Route path="/favorites" element={<FavoritesPage adverts= {adverts}/>} />
            {/* <Route path=":half" element={<HalfPage />} /> */}
          {/* </Route> */}
          <Route path="*" element={<ErrorPage />} />
         </Route> 
      </Routes>
    </>
  );
}
export default App;
