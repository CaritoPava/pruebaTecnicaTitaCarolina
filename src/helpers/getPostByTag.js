const getPostByTag = async (tags) => {
  let postData
  console.log(tags)
  try {
    const url = `https://dummyapi.io/data/v1/tag/${tags.trim()}/post?limit=10`
    const resp = await fetch(url, {
      headers: {
        'app-id': '62676448c7b353234cb37a15'
      }
    })
    console.log(resp)
    const { data } = await resp.json()
    postData = data
    console.log(postData, "datos segun tag")
  } catch (error) {
    console.log(error)
  }
  return postData
}

export default getPostByTag