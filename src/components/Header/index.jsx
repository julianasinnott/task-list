import { UserImage } from '../UserImage';
import './styles.css'

export function Header({user}) {
    return(
        <header>
            <a className='linkedinLinkHeader' target='_blank' href='https://www.linkedin.com/in/julianasinnott/'>{user?.name}</a> 
            <UserImage url={user?.avatar_url} />
        </header>
    )
}