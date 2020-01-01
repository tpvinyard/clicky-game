import React from 'react'

const Modal = props => {
    
    return (
        <div className="modal" id="modal-result">
            <div className="modal-content">
                <h4>{props.message}</h4>
            </div>
            <div className="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Play Again</a>
            </div>
        </div>
    )
}

export default Modal