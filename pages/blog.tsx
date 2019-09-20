import React, {FunctionComponent, useEffect, useState} from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Post from '../components/Blog/Post';
import SearchBar from '../components/Blog/SearchBar';
import Sorter from '../components/Blog/Sorter';


const Index: FunctionComponent = () => {
  const [posts, setPosts] = useState([]);

  function sortPostsByDate(posts, order): Array<object> {
    return posts.sort((a, b) => {
      const c: number = new Date(a.date).getTime();
      const d: number = new Date(b.date).getTime();
      return order === 'desc' ? d - c : c - d;
    })
  }

  async function fetchPosts(): Promise<void> {
    const res = await fetch('https://upply-interview.herokuapp.com');
    const data = await res.json();
    const sortedPosts = sortPostsByDate(data, 'desc');
    setPosts(sortedPosts)
  }

  useEffect(() => {
    fetchPosts();
  }, );

  function handleSearch(value):void {
    const re = new RegExp(value,"i");
    const filteredPosts = posts.filter(post => re.test(post.title));
    setPosts(filteredPosts);
  }

  function handleSort(order):void {
    const sortedPosts = sortPostsByDate(posts, order);
    setPosts(sortedPosts)
  }

  return (
    <Layout>
      <h1 data-testid="page-title">Blog</h1>
      <SearchBar handleSearch={handleSearch}/>
      <Sorter handleSort={handleSort}/>
      {
        posts.map(post => (
          <Post key={post.id} {...post}/>
        ))
      }
    </Layout>
  );
};

export default Index;
