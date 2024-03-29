import React, { useState, useEffect } from 'react';

const ProfileStatusHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);


    const onStatusChange = (e) => {
        setStatus(e.target.value);
    }
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div>
    );
};

export default ProfileStatusHooks;