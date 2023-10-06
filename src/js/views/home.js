import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
import "../../styles/home.css";
import { Link } from "react-router-dom";




export const Home = () => {
	const { store, actions } = useContext(Context)
	const { contacts } = store


	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<h1 className="fw-bold text-center shadow-lg p-3 m-3 bg-primary rounded rounded-pill">Lista de Contactos</h1>
					{contacts.map((contact) => {
						return (

							<div key={contact.id} className="border border-dark border-2 card mx-3 mb-3 ">
								<div className="row d-flex justify-content-around">
									<div className="col-md-4">
										<img src="https://picsum.photos/200" className="shadow-lg my-2 rounded-start" alt="..." />
									</div>
									<div className="col-md-4">
										<div className="card-body">
											<h5 className="text-center fw-bold card-title">{contact.full_name}</h5>
											<p className="text-center card-text">{contact.address}</p>
											<p className="text-center card-text">{contact.phone}</p>
											<p className="text-center card-text">{contact.email}</p>
										</div>
									</div>
									<div className=" col-md-4 d-flex flex-column justify-content-around align-items-center">
										<Link to={`/editform/${contact.id}`}>
											<i className="text-dark fa-solid fa-pen-to-square"></i>
										</Link>

										<i type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa-solid fa-trash"></i>

									</div>
									<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<h5 class="modal-title" id="exampleModalLabel">Alerta</h5>
													<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
												</div>
												<div class="modal-body">
													¿Estas seguro de borrar este contacto?
												</div>
												<div class="modal-footer">
													<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
													<button onClick={() => actions.deleteContact(contact.id)} type="button" class="btn btn-primary" data-bs-dismiss="modal">Borrar contacto</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						)
					})}
					<Link className="d-flex justify-content-center" to="/Form">
						<button className="mt-4 btn btn-primary text-center">Crear Contacto</button>
					</Link>
				</div>
			</div>



		</>
	);
}