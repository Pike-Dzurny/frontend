
import React from 'react';

interface UserProfileProps {
    name: string;
    email: string;
    bio: string;
    avatarUrl: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name = 'John Doe', email = 'johndoe@example.com', bio = 'No bio available', avatarUrl = 'https://via.placeholder.com/150' }) => {
    return (
        <div>
            <img src={avatarUrl} alt={`${name}'s avatar`} />
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{bio}</p>
        </div>
    );
};

export default UserProfile;
