import React from 'react'

type Props = {
    onClick: () => void
}

const Button: React.FC<Props> = ({ onClick }) => {
    return (
        <button onClick={() => onClick()}>

        </button>
    )
}

export default Button