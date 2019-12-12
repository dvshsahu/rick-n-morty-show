import React from 'react';

import AvatarList from './AvatarList';

class Home extends React.Component {
    render() {
        return(
            <div className="app-home">
               <AvatarList />
            </div>

        )
    }
}

export default Home;