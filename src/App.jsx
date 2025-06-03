import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Header from './Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tabs from './Tabs';

export default function App() {
	return (
		<div
			style={{
				display:'flex',
				flexDirection:'column',
				gap: '1em',
				marginLeft:'11.3em',
				marginRight:'10em'
			}}>
			<Header />
			<Tabs />
		</div>
	)
}
