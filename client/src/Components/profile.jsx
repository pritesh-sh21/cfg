import React from 'react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'I am a software developer passionate about creating awesome web applications.',
    avatar: 'https://example.com/avatar.jpg',
  };

  return (
    <div className="profile">
      <img src={user.avatar} alt="User Avatar" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default Profile;