import { Routes, Route } from 'react-router-dom';
import './App.css';
import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';

import DialogsContainer from './components/dialogs/DialogsContainer';
import NavbarContainer from './components/navbar/NavbarContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';

const App = ({ initialized, initializeApp }) => {
	useEffect(() => {
		initializeApp();
	}, [initializeApp]);

	if (!initialized) {
		return <Preloader />;
	}

	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<NavbarContainer />
			<div className="app-wrapper-content">
				<Routes>
					<Route
						path="/profile/:userId?"
						element={
							<Suspense fallback={<Preloader />}>
								<ProfileContainer />
							</Suspense>
						}
					/>
					<Route
						path="/dialogs/*"
						element={
							<Suspense fallback={<Preloader />}>
								<DialogsContainer />
							</Suspense>
						}
					/>
					<Route
						path="/users/*"
						element={
							<Suspense fallback={<Preloader />}>
								<UsersContainer />
							</Suspense>
						}
					/>
					<Route path="/login/*" element={<Login />} />
				</Routes>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, { initializeApp }))(App);
