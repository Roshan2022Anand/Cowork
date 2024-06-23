import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <>
            <nav className='flex justify-between p-1'>
                <div>COWORK</div>
                <ul className='flex justify-evenly w-2/3'>
                    <li><Link href="./">Home</Link></li>
                    <li><Link href="./Tour">TOUR</Link></li>
                    <li><Link href="./Faq">FaQ</Link></li>
                    <li><Link href="./Blog">BLOG</Link></li>
                    <button >Login</button>
                    <button>SignUp</button>
                </ul>
            </nav>
        </>
    )
}

export default Header