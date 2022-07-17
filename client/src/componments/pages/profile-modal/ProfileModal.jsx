import React from "react";

import { Modal, useMantineTheme } from "@mantine/core";

const ProfileModal = ({modalOpened, setModalOpened}) => {
  const theme = useMantineTheme();

  const handleFormSubmit = () => {};

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened = {modalOpened}
      onClose = { () => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleFormSubmit}>
        <h3>MODAL</h3>
      </form>
    </Modal>
  );
};

export default ProfileModal;
