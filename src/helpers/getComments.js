
export const getComments = async (id) => {
  let datosComment
  try {
    const url = `https://dummyapi.io/data/v1/post/${id}/comment`
    const resp = await fetch(url, {
      headers: {
        'app-id': '6266c9acf52f740d79e36115'
      }
    })
    const { data } = await resp.json()

    datosComment = data
    // console.log(resp, "comentarios")
    console.log(datosComment, "comentarios")
  } catch (error) {
    console.log(error)
  }
  return datosComment

}

