import Link from 'next/link'
export default function Logo({ logo }) {
    // console.log(logo)
    return (
        <>
            <Link href={logo.link.href}>
                <a className='navbar-brand'>{logo.link.label}</a>
            </Link>
        </>
    )
}