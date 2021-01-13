// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.scss';
import Cities from './Components/Cities/Cities';
import CityStorage from './Components/CityStorage/CityStorage';
import Storage from './Components/Storage/Storage';
import Transportations from './Components/Transportations/Transportations';

function App() {

	const [currentCity, setCurrentCity] = useState(1)

	const [storages, setStorages] = useState([
		{
			cityId: 1,
			storage: [
				{
					id: 1,
					qty: 10,
				},
				{
					id: 2,
					qty: 20,
				},
			],
		},
		{
			cityId: 2,
			storage: [
				{
					id: 1,
					qty: 5,
				},
			],
		},
	]);







	const goods = [{
		id: 1,
		title: 'Камень'
	},
	{
		id: 2,
		title: 'дерево'
	},
	{
		id: 3,
		title: 'стекло'

	}]


	function getStorageByCity() {
		const store = storages.find((storage) => { return storage.cityId === currentCity }
		)
		if (store) {
			return store.storage
		} else {
			return []
		}
	}

	return (
		<div className="app">

			<h1 className='app-name'>App-name</h1>

			<Cities current City={currentCity} onChange={(city) => {
				setCurrentCity(city)
			}} />

			<div className='content'>
				<div className="column">
					<Storage currentCity={currentCity} storage={getStorageByCity()} goods={goods} />
					<Transportations className='Transportations' />
				</div>
				<div className="column">
					<CityStorage className='CityStorage' />
				</div>
			</div>
		</div>
	);
}

export default App;
