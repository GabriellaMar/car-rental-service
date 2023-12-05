import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';


import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertList } from './redux/selectors';
import { fetchAdvertThunk } from './redux/operation';
// import { useSelector } from 'react-redux';
// import { selectAdvertList } from './redux/selectors';
// import { selectAdvertList } from './redux/selectors';
// import { AppWrapper } from './App.styled';

// const test = import.meta.env.VITE_API_TEST;
 const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const CataloguePage = lazy(() => import('./pages/CataloguePage/CataloguePage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

function App() {
  const dispatch = useDispatch();
 
 useEffect(() => {
   dispatch(fetchAdvertThunk());
 }, [dispatch]);
 const adverts = useSelector(selectAdvertList);
 console.log("Advert", adverts);

  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<MainPage />} /> 
          <Route path="/catalog" element={<CataloguePage adverts ={adverts}/>} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<ErrorPage />} />
         </Route> 
      </Routes>
      <ToastContainer />
    </>
  );
}
export default App;
