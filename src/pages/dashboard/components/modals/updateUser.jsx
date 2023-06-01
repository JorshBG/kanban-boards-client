import { useState } from 'react';
import Single from "./single";
import PropTypes from "prop-types";
import UserForm from "../../../../components/forms/user";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import api from "../../../../api";

ModalFormUser.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  user_id: PropTypes.number.isRequired,
};

export default function ModalFormUser({ visible, setVisible, user_id }) {
    const [user, setUser] = useState({});
    useEffect(() => {
        api
            .get('/users/get/' + user_id)
            .then(response => {
                setUser(response.data.data);
            })
    }, [user_id]);

  return (
    <Single visible={visible}>
      <AiOutlineClose onClick={() => setVisible(!visible)}/>
      <UserForm title="Register new user" setVisible={setVisible} flag={true} user={user} user_id={user_id} />
    </Single>
  );
}
