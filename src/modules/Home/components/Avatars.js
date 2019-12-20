import React from 'react';
import AvatarDetail from './AvatarDetail';
const avatars = props => {
    return (
        props.avatarList.map((avatar,i) => <AvatarDetail key={`${avatar.id}${avatar.status}`} Avatar = {avatar} />)
    )
}

export default avatars;