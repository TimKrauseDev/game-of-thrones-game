import Link from 'next/link';
import React from 'react'

type IProps = {
    name: string
}

function NavbarItem({ name }: IProps): JSX.Element {
    return (
        <li className="nav-item">
            <Link
                className="px-3 py-2 text-xs font-bold leading-snug bg-white text-slate-700"
                href={`#${name}`}
            >
                {name}
            </Link>
        </li>
    )
}

export default NavbarItem;
