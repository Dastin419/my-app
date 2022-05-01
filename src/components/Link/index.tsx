import React from 'react'
import { Link as LinkRRD } from 'react-router-dom'

type LinkProps = {
    to: string
    children: JSX.Element
}

const Link = ({ to, children, ...props }: LinkProps) => {
    return (
        <LinkRRD
            style={{ textDecoration: 'none', color: ' #666' }}
            {...props}
            to={to}
        >
            {children}
        </LinkRRD>
    )
}

export default Link
