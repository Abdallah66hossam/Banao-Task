import Image from "next/image";
import React, { use, useState } from "react";

const Users = ({ users }) => {
  const [seeMore, setSeeMore] = useState(false);
  const data = seeMore ? users : users.slice(0, 4);
  return (
    <div className="position-relative">
      {data.map((user) => {
        return (
          <div
            key={user.id}
            className="d-flex justify-content-between w-full mt-4"
          >
            <div className="d-flex gap-3 align-items-center">
              <Image
                width={50}
                height={50}
                src={user.image}
                alt="profile photo"
              />
              <h3 className="" style={{ fontSize: "14px", fontWeight: "400" }}>
                {user.name}
              </h3>
            </div>
            <button
              className="btn rounded-4 px-4 h-50"
              style={{ backgroundColor: "#EDEEF0", fontSize: "12px" }}
            >
              Follow
            </button>
          </div>
        );
      })}
      <a
        className="text-primary position-absolute mt-3"
        style={{ cursor: "pointer", right: "0" }}
        onClick={() => setSeeMore(!seeMore)}
      >
        {seeMore ? "see less" : "see more"}
      </a>
    </div>
  );
};

export default Users;
