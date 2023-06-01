import PropTypes from "prop-types";
import api from "../../api";

UserForm.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  user_id: PropTypes.number.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default function UserForm({ title, user, user_id, setVisible }) {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append('_method', 'PUT');
    api
      .post('/users/update', data)
      .then((response) => {
        console.log(response);
        alert('User updated');
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setVisible(false);
      });
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__div div">
        <h1 className="div__h1">{title}</h1>
        <input type="hidden" name="user_id" value={user_id} />
        <label htmlFor="name">Name</label>
        <input
          className="div__input"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          pattern="[A-Za-z]+"
          maxLength={50}
          defaultValue={user.name}
        />
        <label htmlFor="last_name">Last name</label>
        <input
          className="div__input"
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Last name"
          required
          pattern="[A-Za-z]+"
          maxLength={50}
          defaultValue={user.last_name}
        />
        <label htmlFor="email">Email</label>
        <input
          className="div__input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          // pattern="[A-Za-z]+"
          maxLength={50}
          defaultValue={user.email}
        />
        <label htmlFor="cellphone">Cellphone</label>
        <input
          className="div__input"
          type="phone"
          name="cellphone"
          id="cellphone"
          placeholder="Cellphone"
          required
          pattern="[0-9]{10}"
          maxLength={10}
          defaultValue={user.cellphone}
        />
        <label htmlFor="password">Password</label>
        <input
          className="div__input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          
          defaultValue={user.password}
        />
        {/* <label htmlFor="confirm_password">Confirm your password</label>
              <input
                className="div__input"
                type="password"
                name="password_confirm"
                id="confirm_password"
                placeholder="Confirm password"
                required
              /> */}
        <input type="hidden" name="role_id" value={10000} />
        <input className="div__input--submit" type="submit" value="Let's Go" />
      </div>
    </form>
  );
}
