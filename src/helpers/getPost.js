

export const getPost = async () => {
  let datosPost
  try {
    const url = `https://dummyapi.io/data/v1/post?limit=50`
    const resp = await fetch(url, {
      headers: {
        'app-id': '625e300400b071439e88fc3d'
      }
    })
    const { data } = await resp.json()
    datosPost = data
  } catch (error) {
    console.log(error)
  }
  return datosPost
}