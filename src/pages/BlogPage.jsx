import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BlogFilter } from '../components/BlogFilter';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />

      <Link to={`/blog/new-post`}>Add new post</Link>
      {posts && (
        <ul className='posts'>
          {posts
            .filter(
              (post) => post.title.includes(postQuery) && post.id >= startsFrom
            )
            .map((post) => (
              <li key={post.id}>
                <Link to={`/blog/post-${post.id}`}>{post.title}</Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

export { BlogPage };
