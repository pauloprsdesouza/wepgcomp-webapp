import React, { useEffect, useState } from 'react';
import { get } from '../../api/API';

function ListSubmission({ newSubmission }) {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        get("/submissions", setSubmissions);
    }, [])

    return (
        <div className="card border-0">
            <div className="card-body card-shadow">
                <div className="card-title">
                    <div className="d-flex justify-content-between">
                        <h4>Submissões</h4>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            newSubmission(true)
                        }}>Nova Submissão</button>
                    </div>
                </div>
                <table className="table table-hove">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Status</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submissions.map((submission) => (
                                <tr key={submission.id}>
                                    <td>{submission.title}</td>
                                    <td>{submission.status}</td>
                                    <td>{submission.submitedAt}</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-primary btn-sm">Atualizar</button>
                                        <button type="button" className="btn btn-danger btn-sm mx-2"><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default ListSubmission;