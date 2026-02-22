function Usercard({ user }) {
  return (
    <div className="user-card">

      <img
        src="https://i.pinimg.com/736x/1a/98/9f/1a989fdeb54d8a7ba2f412d67f73c8ef.jpg"
        alt="profile"
        className="profile-image"
      />

      <h3>{user.name}</h3>
      <p><strong>Status:</strong> {user.status}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Course:</strong> {user.course}</p>
      <p><strong>Joined:</strong> {user.joined}</p>

      <p><strong>About:</strong> {user.about}</p>

      <div>
        <strong>Skills:</strong>
        <ul>
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Usercard;
