import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import axios from "axios";
import { tr } from "framer-motion/client";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
const [error,setError]=useState();



const [user,setUser]=useState ({
  email:"",
  password:""
})
console.log(user)
 const handleChange = (e)=>{
     setUser((old)=>({...old , [e.target.name]:e.target.value}))
 }

const navigate= useNavigate()

const handleLogin = async (e) => {
  e.preventDefault();
    try {
    const response = await axios.post(
      "https://drl-admin.devverx.us/login",
      {
        email: user.email,
        password: user.password,
      }
    );

      const token = response.data.access_token   
      localStorage.setItem('token',token) 
      navigate("/chooseplan")

  } catch (error) {
      setError("Login Error:", error.response?.data || error.message);
    }
  };


  return (
    
    <div className="bg-white lg:px-20 md:px-5.5 px-5 pt-22 pb-24    ">
      
      <div className="max-w-3xl">
        {/* Title */}
        <h1 className="text-[29px]  font-normal leading-[35px] outfit text-[#1E2A5A] lg:mb-10 lg:pt-18 md:pt-11.5 pt-23.5">
          Login
        </h1>
               
        {/* Username */}
        <form onSubmit={handleLogin}>
        <div className="lg:pt-2 md:pt-12 pt-11.5">
          <label className="block text-[#495368] text-[14px] leading-7  outfit font-normal mb-2">
            Username or email address <span className="text-red-600">*</span>
          </label>
          <input
          onChange={handleChange}
            type="email"
            className="w-full h-14 bg-gray-100 px-4 border border-gray-300"
            name="email"
            value={user.email}
          />
        </div>

        {/* Password */}
        <div className="relative py-4.5">
          <label className="block text-[14px] leading-7 font-normal outfit mb-2">
            Password <span className="text-red-600">*</span>
          </label>
          <input
          onChange={handleChange}
          value={user.password}
            type={showPassword ? "text" : "password"}
            className="w-full h-14 bg-gray-100 px-4 pr-12 border border-gray-300"
            name="password"
          />

          {/* Eye Icon */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[65px] text-xl"
          >
            👁
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-12 mt-0.5">
          <button className="bg-[#3E1A8A] text-white px-8 py-3 rounded text-[14px] leading-3.5 font-robots" type="submit">
            Log in
          </button>
  
            

          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="w-3 h-3" />
            Remember me
          </label>
        </div>

 </form>
        {/* Links */}
        <div className="flex md:flex-row flex-col md:gap-2 lg:gap-10 mt-8 text-[12px]  leading-[18px] font-roboto">
          <Link
            to="/forgot-password"
            className="text-green-600  underline"
          >
            Lost your password?
          </Link>

          <Link to="/signup" className="text-blue-800  font-bold underline">
            Still don&apos;t have an account? <span className=""> Sign up</span>
          </Link>
        </div>
       
      </div>
    </div>
  );
}
 