export function Reviewer({ reviewer }) {
  return (
    <div className="reviewer-wrapper">
      <div className="reviewer-image">
        <img
          src={reviewer.userImage}
          alt={reviewer.userName}
          className="userImage"
        />
      </div>
      <div className="reviewer-content-wrapper">
        <p className="reviewer-content">{reviewer.userComment}</p>
        <h3>{reviewer.userName}</h3>
      </div>
    </div>
  );
}
