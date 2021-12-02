import React, { useEffect, useState } from 'react';
import { get } from '../../api/API';
import ScheduleSession from './ScheduleSession';
import './style.css'

function Schedule() {
    const [schedule, setSchedule] = useState([]);
    const [event, setEvent] = useState([]);

    useEffect(() => {
        get("/schedule", setSchedule);
        get("/events", setEvent);
    }, []);

    return (
        <>
            <h1 className="display-6 mb-4">{event.name}</h1>
            {schedule.map((item) => (
                <div className="accordion mb-1" key={item.id}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={`heading${item.id}`}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="false" aria-controls={`collapse${item.id}`}>
                                {item.day}
                            </button>
                        </h2>
                        <div id={`collapse${item.id}`} className={`accordion-collapse collapse`} aria-labelledby={`heading${item.id}`} data-bs-parent={`#collapse${item.id}`}>
                            <div className="accordion-body">
                                <ScheduleSession sessions={item.sessions} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Schedule;