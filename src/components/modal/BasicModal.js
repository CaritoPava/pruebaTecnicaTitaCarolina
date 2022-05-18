import React from 'react'
import { BackDrop, Modal } from './modalStyled'
import ReactDOM from 'react-dom'

export const BasicModal = ({ isVisible, onClose, children }) => {
  const portalEL = document.getElementById('modal-box')
  if (isVisible) {
    return (
      <div onClick={onClose}>{
        ReactDOM.createPortal(<BackDrop>
          <Modal>
            {children}
          </Modal>
        </BackDrop>, portalEL)}
      </div>
    )
  }
}
