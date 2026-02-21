const Modal = ({title, txt}) => {
   return <>
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" hidden id="btn_modal"></button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">{title}</h1>
               </div>
               <div class="modal-body">
                  <h2>{txt}</h2>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-success" data-bs-dismiss="modal">Fechar</button>
               </div>
            </div>
         </div>
      </div>
   </>
}

export default Modal