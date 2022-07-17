import React from "react";

import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const [modalForm, setModalForm] = useState({
    firstName,
    lastName,
    worksAt,
    livesIn,
    country,
    maritalStatus
  });
  const {
    firstName,
    lastName,
    worksAt,
    livesIn,
    country,
    maritalStatus
  } = modalForm;
  const theme = useMantineTheme();
  const handleFormSubmit = () => {};
  const handleChange = () => {};

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <div
        className="col-md-12"
        style={{
          backgroundColor: "#85a5ff",
          padding: "40px",
          borderRadius: "10px"
        }}
      >
        <form className="infoForm" onSubmit={handleFormSubmit}>
          <div className="sign-up">
            <h3>Edit Info</h3>{" "}
          </div>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <div className="input-container">
                {" "}
                <input
                  type="text"
                  placeholder="First Name"
                  className="infoInput"
                  name="firstname"
                  value={firstName}
                  onChange={handleChange}
                />
              </div>{" "}
            </div>
            <div className="col-md-6">
              {" "}
              <div className="input-container">
                {" "}
                <input
                  type="text"
                  placeholder="Last Name"
                  className="infoInput"
                  name="lastname"
                  value={lastName}
                  onChange={handleChange}
                />
              </div>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <div className="input-container">
                {" "}
                <input
                  type="text"
                  placeholder="Works At"
                  className="infoInput"
                  name="worksAt"
                  value={worksAt}
                  onChange={handleChange}
                />
              </div>{" "}
            </div>
            <div className="col-md-6">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Lives In"
                  className="infoInput"
                  name="livesIn"
                  value={livesIn}
                  onChange={handleChange}
                />
              </div>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <div className="input-container-2">
                <input
                  type="text"
                  placeholder="country"
                  className="infoInput"
                  name="country"
                  value={country}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="input-container-2">
                <input
                  type="text"
                  placeholder="Marital Status"
                  className="infoInput"
                  name="maritalStatus"
                  value={maritalStatus}
                  onChange={handleChange}
                />
              </div>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <div className="input-container-2">
                <input
                  type="file"
                  className="infoInput"
                  name="coverImage"
                  // value={maritalStatus}
                  // onChange={handleChange}
                />
                <div>Cover Image</div>
              </div>{" "}
            </div>
            <div className="col-md-6">
              {" "}
              <div className="input-container-2">
                <input
                  type="file"
                  className="infoInput"
                  name="profileImage"
                  // value={maritalStatus}
                  // onChange={handleChange}
                />
                <div>Profile Image</div>
              </div>{" "}
            </div>
          </div>
          <div>
            <button className="button submit-button" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ProfileModal;
