import React from 'react';
import Evaluation from './Evaluation';

function ModalEvaluation({ research }) {
    return (
        <div className="modal fade" id={`modal${research.id}`} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Avaliação</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <figure>
                            <blockquote className="blockquote">
                                <p>Como você avalia o trabalho</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                {research.title}
                            </figcaption>
                        </figure>
                        <Evaluation />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEvaluation;