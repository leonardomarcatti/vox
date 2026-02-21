import { Form, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const DeleteModal = ({id}) => {
   const navigate = useNavigate()

   useEffect(() => {
      const modalEl = document.getElementById("deleteModal")
      const modal = new bootstrap.Modal(modalEl)
      modal.show()
      return () => {
         modal.hide()
         document.body.classList.remove("modal-open")
         document
            .querySelectorAll(".modal-backdrop")
            .forEach(el => el.remove())
      }
   }, [])

   const handleCancel = (e) => {
      e.currentTarget.blur()
      const modalEl = document.getElementById("deleteModal")
      const modal = bootstrap.Modal.getInstance(modalEl)
      modal.hide()

      setTimeout(() => {
         navigate(-1)
      }, 50)
   }

   return (
      <div className="modal fade" id="deleteModal" tabIndex="-1">
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

               <div className="modal-header">
                  <h1 className="modal-title fs-5">Cuidado</h1>
               </div>

               <div className="modal-body">
                  <h2>Deseja mesmo deletar esta tarefa?</h2>
               </div>

               <div className="modal-footer">
                  <Form method="DELETE">
                     <input type="hidden" name="id" value={id} />
                     <button type="submit" className="btn btn-danger" onClick={handleCancel}>
                        Sim
                     </button>
                  </Form>

                  <button
                     type="button"
                     className="btn btn-success"
                     onClick={handleCancel}
                  >
                     Não
                  </button>

               </div>
            </div>
         </div>
      </div>
   )
}

export default DeleteModal