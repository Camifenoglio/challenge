// REACT
import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

//STYLES
import './styles/App.css';

//COMPONENTS
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import DetailsPage from './pages/DetailsProducts';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import SignInOutPage from './pages/SignInOutPage';
import CartPage from './pages/CartPage';
import NavBarAdmin from './components/UserAndAdmin/NavBarAdmin';
import AddProductPage from './components/UserAndAdmin/AddProductPage.jsx'
import AddBlogPage from './components/UserAndAdmin/AddBlogPage.jsx'
import { connect } from 'react-redux'
import userActions from '../src/redux/actions/userActions'

//ACTIONS
import productsActions from './redux/actions/productsActions';
import UserProfile from './pages/UserProfile';
import AdminPage from './pages/AdminPage';


function App(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            const token = localStorage.getItem('token')
            props.verifyToken(token)
        }
        dispatch(productsActions.getProducts())
        // eslint-disable-next-line
    }, [])
console.log(props.user)
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/products/:id' element={<DetailsPage />} />
                <Route path='/aboutus' element={<AboutUsPage />} />
                <Route path='/blog' element={<BlogPage />} />
                <Route path='/user' element={props.user?.role === "user" ? <UserProfile/> : <AdminPage/>} />
                <Route path='/shopping-cart' element={<ShoppingCart />} />
                {!props.user && <Route path='/sign' element={<SignInOutPage />} />}
                <Route path='/cart' element={<CartPage />} />
                <Route path='/addproduct' element={<AddProductPage />} />
                <Route path='/addblog' element={<AddBlogPage />} />
            </Routes>
            <Footer />
            <Toaster
                position='top-center'
                autoClose={6000}
                hideProgressBar={true}
                newestOnTop={true}
                transition={'scale'}
            />
        </div>
    );
}

const mapDispatchToProps = {
    verifyToken: userActions.verifyToken
}
const mapStateToProps = (state) => {
    return {
        user: state.usersReducers.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


