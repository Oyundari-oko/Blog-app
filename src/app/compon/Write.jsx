const WritingApp = (props) => {
  const cover_image = props.cover_image;
  const type_of = props.type_of;
  const title = props.title;
  const profile_image = props.profile_image;
  const user = props.user;
  const published_timestamp = props.published_timestamp;
  return (
    <div className="blogsDesign">
      <img className="images" src={cover_image} />
      <div className="text2">
        <div className="text">{type_of}</div>
      </div>
      <div className="textStyle">{title}</div>
      <img src={profile_image} />
      <div className="usersComment">
        <div className="usersEdit">
          <img className="img" src={user.profile_image} />
          <div className="users">{user.username}</div>
        </div>
        <div className="time">{published_timestamp}</div>
      </div>
    </div>
  );
};
export default WritingApp;
