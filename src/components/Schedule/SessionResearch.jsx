import React, { useState } from 'react';
import ModalEvaluation from '../Evaluation/ModalEvaluation';


function SessionResearch({ researches }) {
    const [items, setItems] = useState(researches);

    function _updateStatus(research) {
        research.active = !research.active;
        setItems([...items]);
        console.log(1);
    }

    function _getResume(research) {
        if (!research.active)
            return research.resume.substr(0, 300)
        else
            return research.resume;
    }

    return (
        <>
            {items.map((research, index) => (
                <div className={`card border-0 ${index < researches.length - 1 ? "mb-2" : ""}`} key={research.id}>
                    <div className="card-body card-shadow">
                        <figure>
                            <blockquote className="blockquote">
                                <p className="card-text mb-2">{research.title}</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <b>Linha de Pesquisa</b>: {research.student.course.researchLine}
                            </figcaption>
                        </figure>
                        <div className="mb-3 text-muted">
                            <span className="span-line-break"><b>Aluno</b>: {research.student.name}</span>
                            <span className="span-line-break"><b>Avaliador</b>: {research.sworn}</span>
                            <span className="span-line-break"></span>
                        </div>
                        <p className="text-justify text-muted">
                            {_getResume(research)}
                            <button type="button" onClick={() => {
                                _updateStatus(research)
                            }} className="btn btn-link btn-sm">
                                {
                                    research.active ? "Ver menos" : "Ver mais"
                                }
                            </button>
                        </p>
                        <button className="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target={`#modal${research.id}`}>Avaliar o trabalho</button>
                        <ModalEvaluation research={research}/>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SessionResearch;