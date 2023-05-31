import "./styles.css";
import api from "../../api";

export default function SignIn() {

  // handler submit form to make fetch to api
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    api.post('/users/signin', {
      email,
      password
    }).then(response => {
      localStorage.clear();
      if(response.status === 200){
        localStorage.setItem('userId', response.data.data.id);
        localStorage.setItem('name', response.data.data.name);
        localStorage.setItem('last_name', response.data.data.last_name);
        localStorage.setItem('role_id', response.data.data.role_id);
        localStorage.setItem('email', response.data.data.email);
        localStorage.setItem('cellphone', response.data.data.cellphone);
        window.location.href = '/dashboard';
      }
    }).catch(error => {
      if(error.code === 'ERR_BAD_REQUEST'){
        alert(error.response.data.message)
      }
      // if(error.response.status === 401){
      //   alert(error.response.data.message)
      // }
    });

  }

  return (
    <div className="container">
      <div className="square">
        <div className="square__form form">
          <form onSubmit={handleSubmit} method="post">
            <div className="form__div div">
              <h1 className="div__h1">Sign In</h1>
              <label htmlFor="email">Email</label>
              <input
                className="div__input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
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
