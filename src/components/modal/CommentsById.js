import React, { useEffect, useState } from 'react'
import { getComments } from '../../helpers/getComments'
import { BasicModal } from './BasicModal'

export const CommentsById = ({ id }) => {
  // console.log(id, "id")

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [datosComments, setDatosComments] = useState([])
  useEffect(() => {
    getComments(id)
      .then(data => {
        setDatosComments(data)
      })
  }, [])
  // console.log(datosComments, "este es el datosComments")

  const handleDisplayModal = () => {
    setIsModalVisible(prevState => !prevState)
  }
  return (
    <div>
      <h6 onClick={handleDisplayModal} className='modal__comments-title' >
        ... ver comentarios
      </h6>
      {isModalVisible && (
        <BasicModal
          onClose={handleDisplayModal}
          isVisible={isModalVisible}
        >
          <h2 >{datosComments.length === 0 ? <p>Loading</p> : datosComments.map((element) =>
            <ul>
              <li key={element.id} className='modal__conte-commets'>
                <div className='modal__comments'>
                  <div className='main__cont-cardPost-user '>
                    <div className='main__cont-cardPost-picture'>
                      <img src={element.owner.picture} alt="" />
                    </div>
                    <div className='main__cont-cardPost-userName'>
                      <p>
                        {element.owner.firstName}
                      </p>
                      <p>
                        {element.owner.lastName}
                      </p>
                    </div>
                  </div>
                  <div>{element.message}</div>

                </div>
              </li>
            </ul>
          )}</h2>
        </BasicModal>
      )}


    </div>
  )
}
