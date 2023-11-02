import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetail from './pages/ProductDetail';
import PageNotFound from './pages/PageNotFound';
import News from './pages/News';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Register from './pages/Register';
import NewsDetail from './pages/NewsDetail';
import Account from './pages/Account';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/admin/Dashboard';
import ProductAdmin from './pages/admin/ProductAdmin';
import CategoryAdmin from './pages/admin/CategoryAdmin';
import UserAdmin from './pages/admin/UserAdmin';
import CommentAdmin from './pages/admin/UserAdmin';
import NewsAdmin from './pages/admin/NewsAdmin';
import OrderAdmin from './pages/admin/OrderAdmin';
function App() {

  return <BrowserRouter>

    <Routes >
      <Route path='/' element={<HomePage/>}/>
      <Route path='iphone' element={<AllProductsPage title="Iphone"/>}/>
      <Route path='macbook' element={<AllProductsPage title="Macbook"/>}/>
      <Route path='others' element={<AllProductsPage title="Phụ kiện"/>}/>
      <Route path='watch' element={<AllProductsPage title="Watch"/>}/>
      <Route path='iphone' element={<AllProductsPage title="Iphone"/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='news' element={<News/>}/>
      <Route path='forgotPassword' element={<ForgotPassword/>}/>
      <Route path='newsDetail/:id' element={<NewsDetail/>}/>
      <Route path='product/:id' element={<ProductDetail/>}/>
      <Route path='account' element={<Account/>}/>
      
      <Route path='admin' element={<Dashboard/>}/>
      <Route path='useradmin' element={<UserAdmin/>}/>
      <Route path='productadmin' element={<ProductAdmin/>}/>
      <Route path='categoryadmin' element={<CategoryAdmin/>}/>
      <Route path='commentadmin' element={<CommentAdmin/>}/>
      <Route path='newsadmin' element={<NewsAdmin/>}/>
      <Route path='orderadmin' element={<OrderAdmin/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
   
  </BrowserRouter>;
}

export default App;
