import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="login">
      <main>
        <h1 className="heading">Login</h1>

        <div>
          <label>gender</label>
          <select 
           value={gender} 
           onChange={(e) => setGender(e.target.value)}>
            <option value="">select gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>

        <div>
          <label>Date of birth </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>


        <div>
            <p>Aleready sign in Once</p>
            <button>
                <FcGoogle /><span>Sign In</span>
            </button>
        </div>


      </main>
    </div>
  );
};

export default Login;
