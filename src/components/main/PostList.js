import React, { useEffect, useState } from 'react'


export const PostList = () => {
  const [datosPost, setDatosPost] = useState([])
  const [datosComment, setDatosComment] = useState([])
  useEffect(() => {
    getPost()
  }, [])

  const getPost = async () => {
    try {
      const url = `https://dummyapi.io/data/v1/post?limit=50`
      const resp = await fetch(url, {
        headers: {
          'app-id': '625e300400b071439e88fc3d'
        }
      })
      const { data } = await resp.json()
      setDatosPost(data)
    } catch (error) {
      console.log(error)
    }




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
  }

  const idPost = datosPost.map(({ id }) => id)

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



  console.log(datosPost, 'datos')
  // console.log(datosComment, 'comments')




  return (
    <>
      <div className='main__conte-post'>

        <h1>{datosPost.length === 0 ? <p>Loading</p> : datosPost.map((element) =>
          <ul>
            <li key={element.id} className="main__cont-cardPost">
              <div className='main__cont-cardPost-user'>
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
              <p className='main__cont-cardPost-text'>{element.text}</p>
              <div className='main__cont-cardPost-ConteTags'>{element.tags.map((tag, id) => <ul><li className="main__cont-cardPost-tags" key={id}>{tag}</li></ul>)}</div>
              <div className='main__cont-cardPost-imgLikes'>
                <div className='main__cont-cardPost-img'> <img src={element.image} alt="" />
                </div>
                <div className='main__cont-cardPost-likes'>
                  <p> <i className='far fa-heart'></i> {element.likes}</p>
                </div>
              </div>
            </li>

          </ul>


        )}</h1>
      </div>

    </>
  )
}


