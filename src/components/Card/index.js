import React from 'react'
import { useNavigate} from 'react-router-dom'

import trash from '../Imagenes/trash.png'
import pencil from '../Imagenes/pencil.png'

import styles from './module.card.css'

const Card = ({ taskData }) => {

	const { title, limit, _id } = taskData

	const navigate = useNavigate()

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

	const handleId = () => {
		navigate('modifier', {
			state: { ident: { _id } }
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

				<button className='containerTrash' onClick={ () => handleClick	(_id) } >
					<img src={ trash } alt='Imagen trash' />
				</button>

				<button className='containerPencil' onClick={handleId}>
					{console.log('prueba', _id)}
						<img src={ pencil } alt='Imagen pencil modificacion' />
				</button>

				<p className='containerLimitTrash'>{ limit }</p>

		</div>
	)
}

export default Card
