import { useAppDispatch, useAppSelector } from "../../../App/hooks";
import { setActiveUser, setUserList } from "../../../App/userSlice";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import "./NavigationBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/", current: true },
  { name: "Your movies", path: "/your-movies", current: false },
  { name: "Profile", path: "/profile", current: false },
];

const NavigationBar = () => {
  const dispatch = useAppDispatch();
  const activeUser = useAppSelector((state) => state.users.activeUser)!;
  const userList = useAppSelector((state) => state.users.userList);

  const handleLogOut = () => {
    const updatedUsers = userList.map((user) => {
      if (user.email === activeUser.email) {
        return { ...user, active: false };
      }
      return user;
    });

    dispatch(setUserList(updatedUsers));
    dispatch(setActiveUser(null));
  };

  return (
    <nav className="navigationBar-wrapper">
      <ul>
        {navigation.map((item) => (
          <li key={item.name}>
            <CustonLink to={item.path}> {item.name} </CustonLink>
          </li>
        ))}
      </ul>
      <div className="userAction-container">
        <Text
            text={`Hello, ${activeUser.name}!`}
            type="paragraph"
            color="#ffffff"
        />
        <Button
            text="Sign Out"
            backgroundColor="#D9D9D9"
            color="#000000"
            onClick={handleLogOut}
        ></Button>
      </div>
    </nav>
  );
};

function CustonLink({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavigationBar;
