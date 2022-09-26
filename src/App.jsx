import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPost } from './pages/BlogPost';
import { BlogPostEdit } from './pages/BlogPostEdit';
import { BlogNewPost } from './pages/BlogNewPost';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/LoginPage';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='blog'>
            <Route index element={<BlogPage />} />
            <Route path='post-:id' element={<BlogPost />} />
            <Route path='post-:id/edit' element={<BlogPostEdit />} />
            <Route
              path='new-post'
              element={
                <RequireAuth>
                  <BlogNewPost />
                </RequireAuth>
              }
            />
          </Route>
          <Route path='about' element={<AboutPage />} />
          <Route path='about-us' element={<Navigate to='/about' replace />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
