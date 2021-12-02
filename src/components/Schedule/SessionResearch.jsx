import React, { useEffect, useState } from 'react';

function SessionResearch({ researches }) {
    const [items, setItems] = useState(researches);

    function updateStatus(research) {
        research.active = !research.active;
        setItems([...items]);
    }

    function teste(research) {
        return research.active ? research.resume.substr(0, 300) : research.resume;
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
                            {teste(research)}
                            <a type="button" onClick={() => {
                                updateStatus(research)
                            }} className="btn btn-link btn-sm">
                                {
                                    research.active ? "Ver mais" : "Ver menos"
                                }
                            </a>
                        </p>
                        <button className="btn btn-outline-secondary btn-sm">Avaliar o trabalho</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SessionResearch;