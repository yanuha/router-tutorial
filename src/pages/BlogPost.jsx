import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const goBlog = () => navigate('/blog', { state: `blog/post-${id}` });
  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', { replace: true });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div className='post'>
      <button onClick={goBlog}>Go Blog</button>
      <button onClick={goBack}>Go back</button>
      {/* Bad approach!!! */}
      <button onClick={goHome}>Go Home</button>
      {/* End Bad approach!!! */}
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/blog/post-${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};

export { BlogPost };
