import React from "react";
import { Link } from "react-router-dom";

export const Modal = () => {
	return (
		<div className="modal" tabindex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<p>¿Estas seguro de borrar este contacto?</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
						<button type="button" className="btn btn-primary">Si</button>
					</div>
				</div>
			</div>
		</div>

	);
};
