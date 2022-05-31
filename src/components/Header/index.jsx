import { UserImage } from "../UserImage";
import './styles.css'

export function Header({user}) {
    return(
        <header>
            <p>{user?.name}</p>
            <UserImage url={user?.avatar_url} />
        </header>
    )
}