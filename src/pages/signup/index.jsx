import "./styles.css";

export default function Signup() {
  return (
    <div className="container">
      <div className="square">
        <div className="square__form form">
          <form action="/signin" method="post">
            <div className="form__div div">
              <h1 className="div__h1">Sign Up</h1>
              <label htmlFor="name">Name</label>
              <input
                className="div__input"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <label htmlFor="last_name">Last name</label>
              <input
                className="div__input"
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last name"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                className="div__input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <label htmlFor="cellphone">Cellphone</label>
              <input
                className="div__input"
                type="phone"
                name="cellphone"
                id="cellphone"
                placeholder="Cellphone"
                required
              />
              <label htmlFor="password">Password</label>
              <input
                className="div__input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              <label htmlFor="confirm_password">Confirm your password</label>
              <input
                className="div__input"
                type="password"
                name="password_confirm"
                id="confirm_password"
                placeholder="Confirm password"
                required
              />
              <input
                className="div__input--submit"
                type="submit"
                value="Let's Go"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
