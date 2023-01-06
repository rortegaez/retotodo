
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Modifier = () => {

	const { reset, register, handleSubmit, formState: { errors } } = useForm()
	const [ taskId, setTaskId ] = useState([])
	const { state } = useLocation()
	const { ident } = state

	const idx = ident._id

useEffect(() => {
	fetch(`http://localhost:8000/task/${idx}`)
	.then(res => {
		return res.json()
	})
	.then(res => {
		return setTaskId(res)
	})
	.catch((error) =>{
		console.log('ERROR', error)
	})
	reset(taskId)
}, [ idx, reset, taskId])

//console.log('task', taskId)

//console.log('titulo', titleCard)



	return (
		<div>

			<form className='formModifier' onSubmit={ handleSubmit()}>

				<h2>Tarea</h2>

					<input type='text' placeholder='tituloPrueba'
					className='containerModifierTitle'
					{...register('title', {
						//value: titleCard,
						required: {
							value: true,
							message: 'Debe de mantener el titutlo'
						}
					})}
					/>
					
				{ errors.title && <span className='errors'> { errors.title.message }</span> }

				<h2>Descripción</h2>

				<input type='text' placeholder={ taskId.task }
				className='containerModifierTask'
				{...register('task', {
					required: {
						value: true,
						message: 'Debe de haber una descripción'
					}
				})}
				/>
				{ errors.task && <span className='errors'>{ errors.task.message }</span> }

				<h2>Fecha</h2>

				<input type='date' className='containerModifierDate'
				{...register('limit', {
					requiered: {
						value: true,
						message: 'Debe de tener una fecha límite'
					}
				})}
				/>
				{ errors.date && <span className='errors'>{ errors.date.message }</span> }

				<button className='buttonModifier'>Modifier task</button>

			</form>

		</div>
	)
}

export default Modifier