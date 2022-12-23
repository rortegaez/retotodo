import React from 'react'
import { useForm } from 'react-hook-form'

const Forms = () => {

	const { register, handleSubmit, formState: { errors } } = useForm()

const onSubmit = result => {
	console.log(result)
	fetch('http://localhost:8000/task/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(result)
	})
	.then(x => {
		console.log('conectado')
	})
	.then(res => res.json())
	.then(info => console.log(info))
	.catch((error) => {
		console.log(error)
	})
}

	return (
		<div>
			<form className='forms' onSubmit={ handleSubmit(onSubmit) }>
				<h3>Crear nueva tarea</h3>

				<input type='text' palcehoder='titulo'
				{...register('title', {
					required: {
						value: true,
						message: 'Debe de incluir un titulo'
					}
				})}
				/>
				{errors.title && <span clasName='errors'>{ errors.title.message }</span>}

				<input type='text' placeholder='tarea'
				{...register('task', {
					required: {
						value: true,
						message: 'Debe de indicar descripción de la tarea'
					},
					minLength: {
						value: 15,
						message: 'Debe de hacer una descripción más exacta'
					}
				})}
				/>
				{errors.task && <span className='errors'>{ errors.task.message }</span>}

				<h3>Fecha límite</h3>

				<input type='date'
				{...register('limit', {
					required: {
						value: true,
						message: 'Es necesario que incluya una fecha límite'
					}
				})}
				/>

				<button>Add task</button>

			</form>
		</div>
	)
}

export default Forms