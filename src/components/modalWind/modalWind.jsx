import "./modalWind.css"


function ModalWind({isModalOpen , setIsModalOpen}) {

    return ( <>
        <div 
            className={isModalOpen ? "modal-wrapper" : "modal-wrapper-none"}
            onClick={()=>setIsModalOpen(false)}
        >
            <div className="modal-content" onClick={(e)=> e.stopPropagation()} >
                <div className="modal-header">
                    <button onClick={()=>setIsModalOpen(false)}>Close</button>
                </div>
                <div className="modal-main">
                        <h1>Content</h1>
                        <input type="text" placeholder="write" />
                </div>
            </div>

        </div>
    </> );
}

export default ModalWind;