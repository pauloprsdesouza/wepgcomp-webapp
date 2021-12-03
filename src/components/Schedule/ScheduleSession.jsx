import React from 'react';
import SessionResearch from './SessionResearch';

function ScheduleSession({ sessions }) {
    return (
        <>
            {sessions.map((session, index) => (
                <div key={session.id}>
                    <h4 className={`mb-3 ${index === sessions.length - 1 ? "mt-5" : ""}`}>{session.name}</h4>
                    <SessionResearch researches={session.researches} />
                </div>
            ))}
        </>
    )
}

export default ScheduleSession;