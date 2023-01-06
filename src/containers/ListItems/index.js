import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './module.listItems.css'

const ListItems = () => {

	const [ taskList, setTaskList ] = useState([])
	//dentro del parentesis del useState ponemos unos corches, porque vamos a guardar el array

	useEffect(() => {
		fetch('http://localhost:8000/task/')
		.then(res => {
			return res.json()
		})
		.then(res =>{
			return setTaskList(res)
		})
		.catch((error) => {
			console.log(error)
		})
	}, []
	)

	return (
		<div className='containerListItems'>

			{ taskList.map(task => <Card taskData={ task } />) }

		</div>
	)
}

export default ListItems