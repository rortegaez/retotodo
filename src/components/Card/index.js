import React from 'react'
import trash from '../Imagenes/trash.png'
import './card.css'

const Card = ({ taskData }) => {

	const { title, limit, _id } = taskData

	const handleClick = (_id) => {
		fetch(`http://localhost:8000/task/${_id}`, {
			method: 'DELETE'
		})
		.then(res => {
			window.location.reload()
			return res.json()
		})
		.then(res => {
			console.log(res)
		})
	}

	/*

	este es el formato de como debe de declararse una función

	const handleClick = (_id) => {
		getAll()
		.then...
	}
	*/

	return (
		<div className='mainCard'>

			<h5 className='containerTittleTrash'>{ title }</h5>

			<button className='containerTrash' onClick={ () => handleClick(_id) } >
				<img src={ trash } alt='Imagen trash' />
			</button>

			<p className='containerLimitTrash'>{ limit }</p>

		</div>
	)
}

export default Card
