import './styles.css'

export function UserImage({url}) {
    return (
        <img className='userImg' src={url} alt="UserImage" />   
    )
}