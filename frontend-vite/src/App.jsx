import { Route, Routes } from 'react-router-dom'
import { ToastContainer, Bounce } from 'react-toastify';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Admin from './component/Admin/Admin';
import Article from './component/Article/Article';
import LoginAdmin from './component/Admin/LoginAdmin/LoginAdmin';
import AddNewArticle from './component/Admin/AddNewArticle/AddNewArticle';
import EditArticle from './component/Admin/EditArticle/EditArticle';
import DeleteArticle from './component/Admin/DeleteArticle/DeleteArticle';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/new" element={<AddNewArticle />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/edit/:id" element={<EditArticle />} />
        <Route path="/delete/:id" element={<DeleteArticle />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
