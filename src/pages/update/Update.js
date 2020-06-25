import React from 'react';
import Form from '../../hooks/form/Form'

import useUpdate from '../../hooks/services/useUpdate'

export default function Update() {
    const UpdateMovie = useUpdate();
    return(
        <main>
            <Form action={UpdateMovie} />
        </main>
    )
}