import React, { Children, useEffect, useState } from 'react'
import { BasicModal } from '../modal/BasicModal'
import { CommentsById } from '../modal/CommentsById'
import { InfoUser } from './InfoUser'


export const PostList = ({ datosPost }) => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [idUser, setIdUser] = useState('')


  // useEffect(() => {
  //   getPost()
  //     .then(data => {
  //       setDatosPost(data)
  //     })
  // }, [])
  // const getPost = async () => {
  //   try {
  //     const url = `https://dummyapi.io/data/v1/post?limit=50`
  //     const resp = await fetch(url, {
  //       headers: {
  //         'app-id': '625e300400b071439e88fc3d'
  //       }
  //     })
  //     const { data } = await resp.json()
  //     setDatosPost(data)
  //   } catch (error) {
  //     console.log(error)
  //   }



  // try {
  //   const url = `https://dummyapi.io/data/v1/comment?postId=${id}`
  //   const resp = await fetch(url, {
  //     headers: {
  //       'app-id': '625e300400b071439e88fc3d'
  //     }
  //   })
  //   const { data } = await resp.json()
  //   setDatosComment(data)
  // } catch (error) {
  //   console.log(error)
  // }




  // const url = `https://dummyapi.io/data/v1/user?limit=10`
  // fetch(url, {
  //   headers: {
  //     'app-id': '625e300400b071439e88fc3d'
  //   }
  // })
  //   .then(response => response.json())
  //   .then(({ data }) => setDatosPost(data))
  //   .catch(err => console.error(err))

  // const url = `https://dummyapi.io/data/v1/user?limit=10`
  // const resp = await fetch(url, {
  //   headers: {
  //     'app-id': '625e300400b071439e88fc3d'
  //   }
  // })
  // const { data } = await resp.json()

  // const filterData = data.map(({ firstName, lastName }) => ({ name: firstName, lastName: lastName }))
  // setDatosPost(filterData)
  // }

  // const viewCommenst = (id) => {
  //   setDatoId(id)
  //   const getCommentes = async () => {
  //     try {
  //       const url = `https://dummyapi.io/data/v1/post/${id}/comment`
  //       const resp = await fetch(url, {
  //         headers: {
  //           'app-id': '6266c9acf52f740d79e36115'
  //         }
  //       })
  //       const { data } = await resp.json()
  //       console.log(data)
  //       setDatosComments(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getCommentes()
  // }

  // console.log(datosComments, "estos son los datos de los comentarios")



  // console.log(idPost, "id")

  // useEffect(() => {
  //   getCommentes()
  // }, [getPost])


  // const getCommentes = async () => {
  //   idPost.forEach((id) => {

  //     const getCommentsByPost = async () => {
  //       try {
  //         const url = `https://dummyapi.io/data/v1/post/${id}/comment`
  //         const resp = await fetch(url, {
  //           headers: {
  //             'app-id': '625e300400b071439e88fc3d'
  //           }
  //         })
  //         const data = await resp.json()
  //         console.log(data, "data")
  //         setDatosComment(data)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }


  //     getCommentsByPost()
  //   })
  // }

  const getIdUser = (idUser) => {
    setIdUser(idUser)

  }

  const handleDisplayModal = () => {
    setIsModalVisible(prevState => !prevState)
  }


  return (
    <>
      <div className='main__conte-post'>

        <h1>{datosPost.length === 0 ? <p>Loading...</p> : datosPost.map((element) =>
          <ul>
            <li key={element.id} className="main__cont-cardPost" onClick={() => getIdUser(element.owner.id)}>
              <div className='main__cont-cardPost-user' onClick={handleDisplayModal}>
                <div className='main__cont-cardPost-picture' >
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
              <p className='main__cont-cardPost-text'>{element.text}</p>
              <div className='main__cont-cardPost-ConteTags'>{element.tags.map((tag, id) =>
                <ul>
                  <li
                    className="main__cont-cardPost-tags"
                    key={id}
                  >
                    {tag}
                  </li>
                </ul>
              )}</div>
              <div className='main__cont-cardPost-imgLikes' >
                <div className='main__cont-cardPost-img'> <img src={element.image} alt="" />
                </div>
                <div className='main__cont-cardPost-likes'>
                  <p> <i className='far fa-heart'></i> {element.likes}</p>
                </div>
                <br />
                <br />

              </div>

            </li>
            <CommentsById id={element.id} />
          </ul>

        )}</h1>
        {isModalVisible && (
          <BasicModal
            onClose={handleDisplayModal}
            isVisible={isModalVisible}
          >
            < InfoUser idUser={idUser} />
          </BasicModal>
        )}

      </div>

    </>
  )
}


