import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Shop } from './pages/shop';
import { About } from './pages/about';
import { FrontPage } from './pages/frontpage';
import { ProductPage } from './pages/productpage';
import { ShoppingCart } from './pages/shoppingcart';
import { Register } from './pages/register';
import '../css/Header.css';
import { OrderDetails } from './pages/orderdetails';
import { Admin } from './pages/admin';
import { UserPanel } from './pages/userpanel';

//Headerin ja footerin välinen sisältö, tänne routingit

export const Content = (props) => {

	return (
		<Routes>
			<Route path="/" element={<FrontPage />} />
			<Route path="/about" element={<About />} />
			<Route path="/orderdetails" element={
				<OrderDetails
					userName={props.userName}
					loggedIn={props.loggedIn}
				/>
			}/>
			<Route path="/register" element={<Register setLoggedIn={props.setLoggedIn} setUserName={props.setUserName} />} />
			<Route path="/shop" element={
				<Shop
					loggedIn={props.loggedIn}
					setItemsInCart={props.setItemsInCart}
				/>} />
			<Route path="/product" element={
				<ProductPage
					loggedIn={props.loggedIn}
				/>} />
			<Route path="/cart" element={
				<ShoppingCart 
					loggedIn={props.loggedIn}
					setItemsInCart={props.setItemsInCart}
				/>
			} />
			<Route path="/admin" element={
				<Admin 
				/>
			} />
			<Route path="/userpanel" element={
				<UserPanel
					logOut={props.logOut}
					loggedIn={props.loggedIn}
					userName={props.userName}
					setItemsInCart={props.setItemsInCart}
				/>
			} />
		</Routes>
	);
}
