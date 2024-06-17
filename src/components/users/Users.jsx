import React from 'react';
import User from './User';
import Paginator from '../common/paginator/Paginator';

const Users = ({ totalItemsCount, pageSize, currentPage, onPageChanges, users, followingInProgress, unfollow, follow }) => {
    
    return (
        <div>
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage} onPageChanges={onPageChanges}/>
            {users.map(u => <User user={u} 
                                followingInProgress={followingInProgress} 
                                unfollow={unfollow} 
                                follow={follow} 
                                key={u.id} 
                            />)}
        </div>
    );
};

export default Users;