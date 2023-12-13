
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="p-20">
      <h1>Hey there</h1>
      <button onClick={() => navigate("/experience")}>Experience</button>
    </header>
  );
};

export default Header;
