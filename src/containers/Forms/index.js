
import { useForm } from 'react-hook-form'
import styles from './module.forms.css'

//import myDate from '../../function/myDate'

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
	.then(res => res.json())
	.then(info => {
		// window... es para actualizar la page y que salgan todos los task
		window.location.reload()
		console.log('information', info)
	})
	.catch((error) => {
		console.log(error)
	})
}

	return (
		<div>
			<form className='containerForms' onSubmit={ handleSubmit(onSubmit) } >
				<h2>Crear nueva tarea</h2>

				<input type='text' placeholder='titulo' className='containerTittle'
				{...register('title', {
					required: {
						value: true,
						message: 'Debe de incluir un titulo'
					}
				})}
				/>
				{errors.title && <span clasName='errors'>{ errors.title.message }</span>}

				<input type='text' placeholder='tarea' className='containerTask'
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

				<h2>Fecha límite</h2>

				<input type='date' className='containerDate'
				{...register('limit', {
					required: {
						value: true,
						message: 'Es necesario que incluya una fecha límite'
					}
				})}
				/>

				<button className='containerButton'>Add task</button>

			</form>
		</div>
	)
}

export default Forms