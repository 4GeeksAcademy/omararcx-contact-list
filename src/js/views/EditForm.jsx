import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";



export const EditForm = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
	})
	//const [newContact, setNewContact] =useState({})
	const { id } = useParams()

	const getContactInfo = async () => {
		try {
			let response = await fetch(`${store.putURL}/${id}`)
			let data = await response.json()
			setContact(data)

		} catch (error) {
			console.log(error)
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		actions.changeContact(contact)
		console.log(contact)
	}

	const handleChange = (event) => {
		setContact({
			...contact,
			[event.target.name]: event.target.value
		})
	}
	useEffect(() => { getContactInfo(id) }, [])

	return (
		<div className="container">
			<div className="row justify-content-center">
				<h1 className="fw-bold text-center shadow-lg p-3 m-3 bg-primary rounded rounded-pill">Editar Contacto</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label for="name" className="form-label"></label>
						<input value={contact.full_name} type="text" className="form-control" id="name" placeholder="Nombre Completo" name="full_name" onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label for="address" className="form-label">Dirección</label>
						<input value={contact.address} type="text" className="form-control" id="address" placeholder="Direccion completa" name="address" onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label for="email" className="form-label">Email</label>
						<input value={contact.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com" name="email" onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label for="phone" className="form-label">Telefono</label>
						<input value={contact.phone} type="phone" className="form-control" id="phone" placeholder="1+123456789" name="phone" onChange={handleChange} />
					</div>
					<button type="submit" className="btn btn-success">Guardar Cambios</button>
				</form >
				<div>
					<Link to="/">
						<button className="mt-2 btn btn-primary">Volver al Inicio</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
