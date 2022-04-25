import React from 'react'
import { NabBar } from '../nav/NabBar'
import { BarTags } from './BarTags'
import { PostList } from './PostList'

export const MainView = () => {
  return (
    <div>
      <NabBar />
      <main className='main__conte'>
        <BarTags />
        <PostList />
      </main>
    </div>
  )
}
