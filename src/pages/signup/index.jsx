import api from "../../api";
import "./styles.css";
import { useEffect } from "react";

export default function Signup() {
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      window.location.href = "/dashboard";
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    api.post('/users/signup', data).then(response => {
      localStorage.clear();
      if(response.status === 200){
        console.log(response)
        // window.location.href = '/signin';
      }
    }).catch(error => {
      if(error.code === 'ERR_BAD_REQUEST'){
        // alert(error.response.data.message)
        console.log(error)
      }
    });

  }

  return (
    <div className="container">
      <div className="square">
        <div
          className="square__form form"
        >
          <form method="post" onSubmit={handleSubmit}>
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
                pattern="[A-Za-z]+{50}"
              />
              <label htmlFor="last_name">Last name</label>
              <input
                className="div__input"
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last name"
                required
                pattern="[A-Za-z]+{50}"
              />
              <label htmlFor="email">Email</label>
              <input
                className="div__input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                pattern="[A-Za-z]+{50}"
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
              {/* <label htmlFor="confirm_password">Confirm your password</label>
              <input
                className="div__input"
                type="password"
                name="password_confirm"
                id="confirm_password"
                placeholder="Confirm password"
                required
              /> */}
              <input type="hidden" name="role_id" value={10000}/>
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
