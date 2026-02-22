import { useEffect, useRef } from "react";

const Modal = ({ title, txt, show }) => {
   const modalRef = useRef(null);

   useEffect(() => {
      if (!show) return;

      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
   }, [show]);

   return (
      <div
         className="modal fade"
         ref={modalRef}
         tabIndex="-1"
         aria-hidden="true"
      >
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
               <div className="modal-header">
                  <h1 className="modal-title fs-5">{title}</h1>
               </div>

               <div className="modal-body">
                  <h2>{txt}</h2>
               </div>

               <div className="modal-footer">
                  <button
                     type="button"
                     className="btn btn-success"
                     data-bs-dismiss="modal"
                  >
                     Fechar
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Modal;