import React from 'react'
import Layout from './components/Layout'
import Link from 'next/link'
const Blog = ({result}) => {
  console.log(result)
  return (
    <Layout
        title="blog"
    >
        <h1>Desde Blog</h1>

    </Layout>
  )
}

export async function getStaticProps(){
  const url = "http://localhost:1337/blogs"
  const response = await fetch(url);
  const result = await response.json();
  console.log(result); 
  return{
    props: {
      result
    }
  }
}
export default Blog