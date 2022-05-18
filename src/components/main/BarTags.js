import React, { useEffect, useState } from 'react'


export const BarTags = ({ handleTag }) => {


  const [tags, setTags] = useState([])

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



  return (

    <div className='main__conte-tags'>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag, id) =>
          <li
            className="main__conte-listTags"
            key={id}
            onClick={() => handleTag(tag)}>
            {/* {tag.length > 3 && tag.length < 10 ? tag : null} */}
            {tag}
          </li>
        )}
      </ul>
    </div>
  )
}


