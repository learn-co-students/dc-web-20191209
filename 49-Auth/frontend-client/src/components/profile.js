import React from "react";
import { Card, Image } from "semantic-ui-react";

/* props: {
  avatar: 'someURL',
  username: 'chandler Bing',
  bio: 'i like eggs'
} */

const Profile = (props) => {
  let { avatar, username, bio } = props.user
  return <Card>
    <Image src={avatar} />
    <Card.Content>
      <Card.Header>{username}</Card.Header>

      <Card.Description>{bio}</Card.Description>
    </Card.Content>
  </Card>
};

export default Profile;
