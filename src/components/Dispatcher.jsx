import { BrowserRouter, Routes, Route } from "react-router-dom";
const Dispatcher = ({scheduler, edit}) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Posts posts={posts} users={users} />} />
      <Route path="/edit" element={<Users users={users} />} />
    </Routes>
  </BrowserRouter>
);