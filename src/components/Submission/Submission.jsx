import React, { useState } from 'react';
import ListSubmission from './ListSubmission';
import RegistrationSubmission from './RegistrationSubmission';

function Submission() {
    const [isNewSubmission, setIsNewSubmission] = useState(false);

    function checkSubmission() {
        return isNewSubmission ? <RegistrationSubmission closeSubmission={setIsNewSubmission} /> : <ListSubmission newSubmission={setIsNewSubmission} />
    }

    return (
        checkSubmission()
    )
}

export default Submission;