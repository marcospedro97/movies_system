import React from 'react';
import Form from '../../hooks/form/Form'
import useCreate from '../../hooks/services/useCreate';

export default function Create() {
    const movieCreate = useCreate();
    return (
            <Form action={movieCreate} />
    )
}
