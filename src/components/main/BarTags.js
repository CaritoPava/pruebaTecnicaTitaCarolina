import React, { useEffect, useState } from 'react'
import { getPostByTag } from '../../helpers/getPostByTag'

export const BarTags = () => {

  const [tags, setTags] = useState([])
  const [pots, setPost] = useState([])

  useEffect(() => {
    getTags()
  }, [])

  const getTags = async () => {
    try {
      const url = `https://dummyapi.io/data/v1/tag?limit=20`
      const resp = await fetch(url, {
        headers: {
          'app-id': '626753f79a481885107b1be8'
        }
      })
      const { data } = await resp.json()
      const tagsWithInfo = data.filter(tag => tag.length > 2 && tag.length < 20)
      console.log(tagsWithInfo)
      setTags(tagsWithInfo.slice(2, 50))
    } catch (error) {
      console.log(error)
    }
  }

  const viewPosts = async (tag) => {
    console.log(tag)
    try {
      const url = `https://dummyapi.io/data/v1/tag/${tag.trim()}/post?limit=10`
      const resp = await fetch(url, {
        headers: {
          'app-id': '62676448c7b353234cb37a15'
        }
      })
      console.log(resp)
      const { data } = await resp.json()
      setPost(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(pots, "pots")
  return (

    <div className='main__conte-tags'>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag, id) =>
          <li
            className='main__conte-listTags'
            key={id}
            onClick={() => viewPosts(tag)}>
            {/* {tag.length > 3 && tag.length < 10 ? tag : null} */}
            {tag}
          </li>
        )}
      </ul>
    </div>
  )
}
