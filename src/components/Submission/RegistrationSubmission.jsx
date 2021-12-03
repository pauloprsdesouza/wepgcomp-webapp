import React, { useState } from 'react';

function RegistrationSubmission({ closeSubmission }) {
    const [title, setTitle] = useState("");
    const [resume, setResume] = useState("");
    const slide = React.createRef();
    const RESUME_SIZE = 1000;

    function save(event) {
        event.preventDefault();

        const research = { title, resume, slide: slide.current.files[0] }
    }

    function charsResume() {
        const isExceed = RESUME_SIZE - resume.length < 0;

        if (isExceed)
            return (
                <span className="text-danger">Caracteres restantes&nbsp;{1000 - resume.length}</span>
            )
        else
            return (
                <span>Caracteres restantes&nbsp;{1000 - resume.length}</span>
            )
    }

    return (
        <div className="card border-0">
            <div className="card-body card-shadow">
                <div className="card-title mb-4"><h4>Nova Submissão</h4></div>
                <form onSubmit={save}>
                    <div className="mb-3">
                        <label className="form-label">Título do trabalho</label>
                        <input type="text" className="form-control" onChange={(event) => {
                            setTitle(event.target.value);
                        }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Resumo</label>
                        <textarea className="form-control" rows="7" onChange={(event) => {
                            setResume(event.target.value);
                        }} />
                        {charsResume()}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Upload Slides</label>
                        <input type="file" className="form-control" ref={slide} />
                    </div>
                    <div className="text-end">
                        <button type="submit" className="btn btn-primary mx-2">Salvar</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => { closeSubmission(false) }}>Fechar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationSubmission;