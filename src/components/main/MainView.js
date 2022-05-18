import React, { useEffect, useState } from 'react'
import { getPost } from '../../helpers/getPost'
import getPostByTag from '../../helpers/getPostByTag'
import { NabBar } from '../nav/NabBar'
import { BarTags } from './BarTags'
import { PostList } from './PostList'

export const MainView = () => {

  const [datosPost, setDatosPost] = useState([])
  const [tags, setTags] = useState([])

  const handleTag = (tag) => {
    setTags(tag)
  }
  console.log(tags)

  useEffect(() => {
    if (tags.length > 0) {
      getPostByTag(tags)
        .then(data => {
          setDatosPost(data)
        })
    } else {
      getPost()
        .then(data => {
          setDatosPost(data)
        })
    }
  }, [tags])

  return (
    <div>
      <NabBar />
      <main className='main__conte'>
        <BarTags handleTag={handleTag} />
        <PostList datosPost={datosPost} />
      </main>
    </div>
  )
}


