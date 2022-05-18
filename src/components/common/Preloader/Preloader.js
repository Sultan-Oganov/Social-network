import React from 'react'
import preloader from '../../../img/preloader.svg'

const Preloader = (props) => {
    let style = {
        width: '150px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
    return (
        <>
            <img
                style={style}
                src={preloader}
                alt="loading"
            />
        </>
    )
}
export default Preloader