import React from "react";

function User(props) {
  const { name, avatar_url, login, bio, followers } = props.user;
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <div>
        <p>Name: {name}</p>
        <p>Login: {login}</p>
        <p>Bio: {bio}</p>
        <p>Followers: {followers}</p>
      </div>
      <h2>Followers:</h2>
      {props.followers.map((follower) => {
        return (
          <div key={follower.node_id}>
            <img src={follower.avatar_url} alt={follower.login} />
            <p>{follower.login}</p>
          </div>
        );
      })}
    </div>
  );
}

export default User;
