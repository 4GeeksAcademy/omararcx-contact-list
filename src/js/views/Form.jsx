import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";



export const Form = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({
		"full_name": "",
		"email": "",
		"agenda_slug": "omararcx",
		"address": "",
		"phone": ""
	})

	const handleSubmit = (event) => {
		event.preventDefault()
		actions.saveContact(contact)
	}

	const handleChange = (event) => {
		setContact({
			...contact,
			[event.target.name]: event.target.value
		})
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<h1 className="fw-bold text-center shadow-lg p-3 m-3 bg-primary rounded rounded-pill">Crear Contacto</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label for="name" className="form-label">Nombre</label>
						<input type="text" className="form-control" id="name" placeholder="Nombre Completo" name="full_name" onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label for="address" className="form-label">Dirección</label>
						<input type="text" className="form-control" id="address" placeholder="Direccion completa" name="address" onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label for="email" className="form-label">Email</label>
						<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com" name="email" onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label for="phone" className="form-label">Telefono</label>
						<input type="phone" className="form-control" id="phone" placeholder="1+123456789" name="phone" onChange={handleChange} />
					</div>
					<button type="submit" className="btn btn-success">Enviar</button>
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
