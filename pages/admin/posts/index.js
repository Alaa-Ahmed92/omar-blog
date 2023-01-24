import React from 'react'

import Post from '../../../models/Post';
import dbConnect from '../../../utils/dbConnect';
import AdminHead from '../../../components/AdminHead';
import BreadCrumbs from '../../../components/BreadCrumbs';
import PostsTable from '../../../components/Tables/PostsTable';

const PostsPage = ({ posts }) => {

  const links = [
    { name: 'Admin', path: '/admin' },
    { name: 'Posts', path: '/admin/posts' }
  ];

  return (
    <div className='pb-50'>
      <div className='container'>
        <AdminHead
          className='orange-admin-head'
          link='/admin/posts/new'
          title='Posts'
          label='Post'
        />
        <BreadCrumbs links={links} />
        <div>
          <div className='row'>
            <div className='col-md-12'>
              <PostsTable posts={posts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {

  const myCookie = ctx.req?.cookies || "";
  await dbConnect();

  /* find all the data in our database */
  const result = await Post.find({})
  const posts = result.map((item) => {
    const post = item.toObject()
    post._id = post._id.toString()

    return post;
  })

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: '/admin/login',
        permenant: false
      }
    }
  }

  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) }
  }
}

export default PostsPage