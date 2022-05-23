export const getInfoUser = async (idUser) => {
  console.log(typeof idUser)
  let datosUser
  try {
    const url = `https://dummyapi.io/data/v1/user/${idUser}`
    const resp = await fetch(url, {
      headers: {
        'app-id': '626adac272fe7e3434cd92eb'
      }
    })
    const data = await resp.json()
    datosUser = data
  } catch (error) {
    console.log(error)
  }
  return datosUser
}