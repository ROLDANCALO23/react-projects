import {useState} from 'react';
export function TwitterFollowCard({children,userName,initialIsFollowing}) {
    const [isFollowing,setIsFollowing]=useState(initialIsFollowing);

    const imgSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                className="tw-followCard-avatar" 
                src={imgSrc} 
                alt="El avatar de ejemplo"/>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
    
            <aside>
                <button className={buttonClass}  onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
      );
}
