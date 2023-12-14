import { Link } from 'react-router-dom';
function Login() {
  return (
    <body>

    <div>
   <form>
       <b>
   </b>
   <box>
    <h1><b>LOGIN</b></h1>
    
    
      <label><b>Enter Your Email            :   </b>
        <input type ="email"required placeholder="email" id="email"></input>
        </label>
        <br></br>
        <br></br>
    
        <label><b>Enter Your Password:  </b>
          <input type="password"required placeholder="password" id="password"></input>
          </label>
          <br></br>  
          <br></br>

          <button><b>Log In</b></button>
          <br></br>
          <br></br>

          <Link to="/Signup"><button><b>Don't have an account? Signup here</b></button></Link>

          </box>

   </form>

    </div>
  
    </body>
  );
}

export default Login;