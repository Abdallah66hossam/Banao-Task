import Banner from "@/components/Banner";
import { Feed } from "@/components/Feed";
import FilterDesc from "@/components/FilterDesc";
import NavBar from "@/components/NavBar";
import axios from "axios";
import React from "react";

const Home = ({ data }) => {
  const loggedIn = true;
  return (
    <main>
      <NavBar loggedIn={loggedIn} />
      <Banner />
      <Feed users={data} loggedIn={loggedIn} />
    </main>
  );
};

export default Home;

export async function getServerSideProps() {
  const response = await axios.get("https://banao-task.vercel.app/api/users");

  return { props: { data: response.data } };
}
