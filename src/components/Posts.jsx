import React from 'react';
import { Navigate, useNavigate, Route, Routes } from 'react-router-dom';
function Posts() {
  const status = 200;
  const navigate = useNavigate();
  const onclick = () => {
    console.log('hello');
    navigate('/about');
  };
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      Posts
      <button onClick={onclick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello world</h1>} />
      </Routes>
    </div>
  );
}

export default Posts;
