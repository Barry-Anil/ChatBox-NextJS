import React, {useContext} from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import Axios from 'axios'
import axios from "axios";

export default function Auth() {
  const {username, secret, setUsername, setSecret} = useContext(Context)
  const router = useRouter();

  function onSubmit(e){
    e.preventDefault()

    if(username === 0 || secret === 0) return;

    axios.put('https://api.chatengine.io/users/', 
    {username, secret}, 
    {headers : {'Private-key': 'e10791b1-cb1a-4e6b-9ad0-5e8fd4ecea15'}}
    ).then(res => router.push('/chats'))
  } 

  return (
  <div className="background">
    <div className="auth-container">
      <form className="auth-form " onSubmit={(e)=> onSubmit(e)}>
        <div className="auth-title">NextJS Chat</div>
        <div className="input-container">
          <input
            placeholder="Email"
            className="text-input"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type='password'
            placeholder="Password"
            className="text-input"
            onChange={(e) => setSecret(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="submit-button "
        >
          Login/ SignUp
        </button>
      </form>
    </div>
  </div>
  )
}
