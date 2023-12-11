import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertList } from './redux/selectors';
import { fetchAdvertThunk } from './redux/operation';
import { Loader } from './components/Loader/Loader';



const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const CataloguePage = lazy(() => import('./pages/CataloguePage/CataloguePage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

function App() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  useEffect(() => {
    dispatch(fetchAdvertThunk({ page: currentPage, limit: cardsPerPage  }));

  }, [dispatch, currentPage]);
  


  const adverts = useSelector(selectAdvertList);


  return (
    
     <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage adverts={adverts} />} />
          <Route path="/catalog" element={<CataloguePage adverts={adverts} currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer />
      </Suspense>
  
  );
}
export default App;
