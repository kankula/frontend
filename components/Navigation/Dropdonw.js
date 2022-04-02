import Link from "next/link"
const Dropdown = ({ label, genres }) => {
    
    const genreData = genres.data
    // console.log(genres)
    return (

        <li className="nav-item dropdown" aria-labelledby="navbarDropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{label}</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {genreData.map((item, i) => <li key={i}><Link href={`/genres/${item.attributes.slug}`}><a className="dropdown-item" >{item.attributes.name}</a></Link></li>)}
            </ul>
        </li>
    )
}
export default Dropdown