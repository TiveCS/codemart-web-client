import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Bars3Icon } from '@heroicons/react/24/outline'
import Logo from "../Logo";

export default function Navbar() {
    return <nav className='w-screen shadow-md grid grid-flow-col grid-cols-3 px-6 md:px-16 py-6'>
        <div className="col-span-2 flex flex-row items-center gap-x-16">
            <Logo />

            <div className="hidden md:flex">
                <Link to={'/'}>
                    <Button style={'text'}>Home</Button>
                </Link>
                <Link to={'/products/sell'}>
                    <Button style={'text'}>Sell Product</Button>
                </Link>
                <Link to={'/products'}>
                    <Button style={'text'}>Browse</Button>
                </Link>
            </div>
        </div>
        <div className="flex flex-row items-center justify-end">
            <Bars3Icon className="h-6 w-6 md:hidden" />

            <div className="hidden md:flex gap-x-4">
                <Link to={'/login'}>
                    <Button style={'text'}>Login</Button>
                </Link>

                <Link to={'/register'}>
                    <Button style={'primary'}>Join Now</Button>
                </Link>
            </div>
        </div>
    </nav>
}