import React, {FunctionComponent, useEffect, useState} from 'react';

import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';


const Index: FunctionComponent = () => {
  const [posts, setPosts] = useState([]);

  async function fetchPosts():Promise<void>{
    const res = await fetch('https://upply-interview.herokuapp.com');
    const data = await res.json();
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts();
    return () => window.stop()
  }, [posts]);

  return (
    <Layout>
      <h1 data-testid="page-title">Blog</h1>
      {
        posts.map(post => (
          <div>{post.text}</div>
        ))
      }
    </Layout>
  );
};

export default Index;
