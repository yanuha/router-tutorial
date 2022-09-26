import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

const BlogNewPost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const handleSignout = () => {
    signout(() => navigate('/', { replace: true }));
  };

  return (
    <>
      <button type='button' onClick={handleSignout}>
        Log out
      </button>
      <h2>Blog Post New</h2>
    </>
  );
};

export { BlogNewPost };
