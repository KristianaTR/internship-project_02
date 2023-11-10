import Button from '../../atoms/Button';
import './NavigationBar.css';
import { Link, useMatch, useResolvedPath} from 'react-router-dom';


const navigation = [
    { name: 'Home', path: '/', current: true },
    { name: 'Your movies', path: '/your-movies', current: false },
    { name: 'Profile', path: '/profile', current: false },
]

const NavigationBar = () => {
    
  return (
        <nav className='navigationBar-wrapper'>
            <ul>
                {navigation.map((item) => (
                    <li key={item.name}>
                        <CustonLink to={item.path}> {item.name} </CustonLink>
                    </li>
                ))}
            </ul>
            <Button 
                text='Sign Out'
                backgroundColor='#D9D9D9'
                color= '#000000'
            ></Button>
        </nav>
    )
}

function CustonLink ({to, children, ...props}: { to: string; children: React.ReactNode; [key: string]: any }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default NavigationBar