import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import styles from "./styles/navbar.module.scss";
import { open } from "@/redux/formSlice";
import { useDispatch } from "react-redux";

const SmallNav = () => {
  const dispatch = useDispatch();

  return (
    <nav
      className={`d-none ${styles.mobileNav} bg-transparent d-flex justify-content-between align-items-center px-4 py-3 position-absolute w-100`}
    >
      <IoArrowBackOutline color="#fff" size={23} />
      <button
        className="bg-transparent border border-white rounded pointer-event text-white px-3 py-2"
        onClick={() => dispatch(open())}
      >
        Join Group
      </button>
    </nav>
  );
};

export default SmallNav;
