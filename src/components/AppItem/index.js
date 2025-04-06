import "./index.css";

const AppItem = (props) => {
  const { appDetails } = props;
  const { imageUrl, appName } = appDetails;

  return (
    <li className="app-item">
      <img src={imageUrl} alt="image" className="image" />
      <p className="app-name">{appName}</p>
    </li>
  );
};

export default AppItem;
