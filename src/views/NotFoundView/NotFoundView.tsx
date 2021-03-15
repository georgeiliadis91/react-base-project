import React, { ReactElement } from 'react'

interface Props {
    
}

export default function NotFoundView({}: Props): ReactElement {
    return (
        <div className='not-fount-view'>
            Error: Not Found
        </div>
    )
}
