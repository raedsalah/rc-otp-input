import React from 'react'

interface OtpProps {
    label: string;
}

const Otp = (props: OtpProps) => {
    return (
        <div>{props.label}</div>
    )
}

export default Otp