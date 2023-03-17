import { Link } from 'react-router-dom'
import LogoNoTextPath from '/src/assets/img/logo-notext.svg'


export default function Logo() {
    return (
        <Link to={'/'}>
            <img src={LogoNoTextPath} />
        </Link>
    )
}