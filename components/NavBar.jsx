import { BiSearch } from "react-icons/bi";
import styles from "./styles/navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/whole.png";
import SmallNav from "./SmallNav";
import { useDispatch, useSelector } from "react-redux";
import { open } from "@/redux/formSlice";
import Form from "./Form";
import profile from "../public/assets/human4.png";
import { AiOutlineCaretDown } from "react-icons/ai";

const NavBar = ({ loggedIn }) => {
  const { isShown } = useSelector((state) => state.formIsVisible);
  const dispatch = useDispatch();
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white px-5 py-3 ${styles.nav} fixed-top`}
      >
        <div className="d-flex justify-content-between w-100">
          <Link href="/" className={`navbar-brand ${styles.brand}`}>
            <Image src={logo} className={styles.logo} alt="logo" />
          </Link>
          <div
            className="collapse navbar-collapse d-block justify-content-between"
            id="navbarCollapse"
          >
            <div
              className={`input-group d-flex justify-content-center align-items-center border rounded-5 border-dar py-1 px-3 ${styles.search}`}
            >
              <BiSearch size={22} />
              <input
                type="text"
                className="form-control border-0 bg-transparent shadow-none"
                placeholder="Search for your favorite groups in ATG
                "
              />
            </div>
            <div className="navbar-nav">
              {loggedIn ? (
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    width={50}
                    height={50}
                    src={profile}
                    alt="profile img"
                  ></Image>
                  <p style={{ fontSize: "14px" }} className="mt-3">
                    Siddharth Goyal
                  </p>
                  <AiOutlineCaretDown size={14} />
                </div>
              ) : (
                <Link
                  href="/"
                  className="nav-item nav-link"
                  onClick={() => dispatch(open())}
                >
                  Create account.
                  <span className={`text-primary ${styles.signup}`}>
                    It’s free!
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <SmallNav loggedIn={loggedIn} />
      {isShown && <Form />}
    </>
  );
};

export default NavBar;
