import React from 'react';

function Evaluation() {
    const questions = [
        {
            id: 1,
            question: "Domínio sobre a temática",
            rating: 0
        },
        {
            id: 2,
            question: "Clareza na apresentação",
            rating: 0
        },
        {
            id: 3,
            question: "Aprofundamento técnico",
            rating: 0
        },
        {
            id: 4,
            question: "Contribuição do trabalho",
            rating: 0
        }
    ];

    const ratingsItems = [1, 2, 3, 4, 5];

    return (
        <>
            {questions.map((question, index) => (
                <div className="row" key={question.id}>
                    <h6 className="mb-3">{`${index+1}) ${question.question}`}</h6>
                    {ratingsItems.map((rating) => (
                        <div className="form-check form-check-inline" key={rating}>
                            <input className="form-check-input" type="radio" />
                            <label className="form-check-label" >
                                {rating}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

export default Evaluation;