declare global {
  interface Window {
    my_modal_1: any;
  }
}

export default function AddNavbarModal(){

  return (
    <>
        <div className="add-btn fixed right-7 bottom-7 ">
          <button className="btn btn-circle btn-outline btn-info btn-lg" onClick={()=>window.my_modal_1.showModal()}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 stroke-2">
                      <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                  </svg>
              </button>
           </div>


            <dialog id="my_modal_1" className="modal">
                      <form method="dialog" className="modalB bg-base-200 p-14 w-6/12">
                      <h2 className="text-lg font=bold">Navbar Style</h2>
                      <input type="text" placeholder="Big..." className="input w-full mb-2" />
                      <h2 className="text-lg font=bold">Navbar Color</h2>
                      <input type="text" placeholder="Red..." className="input w-full mb-2" />
                        <div className="modal-action">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                          <button className="btn btn-primary">Add</button>
                        </div>
                      </form>
            </dialog>



    </>
  )
}