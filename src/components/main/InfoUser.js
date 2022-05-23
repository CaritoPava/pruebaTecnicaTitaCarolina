import React, { useEffect, useState } from 'react'
import { getInfoUser } from '../../helpers/getInfoUser'

export const InfoUser = ({ idUser }) => {
  const [datosUser, setDatosUser] = useState([])
  useEffect(() => {
    getInfoUser(idUser)
      .then(data => {
        setDatosUser(data)
      })
  }, [])

  return (
    <>
      <h2>Información Usuario</h2>
      <div className='modal__info-User'>
        <div className='modal__info-UserImg'>
          <img src={datosUser.picture} alt="" />
        </div>
        <div>
          <div className='modal__info-User-Name'>
            <p>{datosUser.firstName}</p>
            <p>{datosUser.lastName}</p>
          </div>
          <div className='modal__info-User-Data'>
            <p>{datosUser.gender}</p>
            <p>{datosUser.email}</p>
          </div>
        </div>
      </div>
    </>

  )
}
