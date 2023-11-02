
import { useDispatch } from "react-redux";
import { CatalogueList } from "../../components/GatalogueList/CatalogueList.jsx";
import { useEffect, useState } from "react";
import { fetchAdvertThunk } from "../../redux/operation.js";
import { Modal } from "../../components/Modal/Modal"
import { CarDetails } from "../../components/СarDetails/CarDetails.jsx";


 const CatalogPage = ()=>{
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

   

    useEffect(() => {
       
        dispatch(fetchAdvertThunk());
      }, []);

    
       
    
      const toggleModal = () => {
          console.log("КЛІЛНУЛИ")
          setShowModal(!showModal);
          if (showModal) { document.body.style.overflow = 'hidden' }
          else { document.body.style.overflow = 'auto' }
        };

    return (
        <>
        <div> CATALOG PAGE</div>
        <CatalogueList showModal={showModal} toggleModal={toggleModal} />
        {showModal && <Modal />}
        </>
    )
}

export default CatalogPage;