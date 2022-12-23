import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

const ListItems = () => {

	const [ taskList, setTaskList ] = useState([])
	//dentro del parentesis del useState ponemos unos corches, porque vamos a guardar el array

	useEffect(() => {
		fetch('http://localhost:8000/task/')
		.then(res => {
			return res.json()
		})
		.then(res => {
			console.log('prueba', res)
			return res
		})
		.then(res =>setTaskList(res))
		.catch((error) => {
			console.log(error)
		})
	}, []
	)

	return (
		<div className='containerListItems'>

			<h3>Tareas</h3>

			{ taskList.map(task => <Card taskData={ task } />) }

		</div>
	)
}

export default ListItems