import React from 'react'
import trash from '../Imagenes/trash.png'
import { useEffect } from 'react'
import './card.css'

const Card = ({ taskData }) => {

	const { title, limit, _id } = taskData

	const handleClick = (_id) => {
		fetch(`http://localhost:8000/task/${_id}`, {
			method: 'DELETE'
		})
		.then(res => res.json())
	}

	
	useEffect(() => {
		fetch('http://localhost:8000/task/')
		.then(res => res.json())
	}, [])
	

	/*

	este es el formato de como debe de declararse una función

	const handleClick = (_id) => {
		getAll()
		.then...
	}
	*/

	return (
		<div className='mainCard'>

			<h5>{ title }</h5>

			<button className='button' onClick={ () => {
				handleClick(_id)
			} }>
				<img src={ trash } alt='Imagen trash' />
			</button>

			<p>{ limit }</p>

		</div>
	)
}

export default Card
