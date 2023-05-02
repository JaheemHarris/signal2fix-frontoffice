import React,{useState,useEffect} from 'react';
import api from './api';
import {useNavigate} from 'react-router';
import "../assets/login-style.css";


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword]  = useState('');
    const [error, setError] = useState('');

    useEffect(()=>{
        if(localStorage.getItem('token')){
            console.log('Connected!')
            navigate('/home');
        }
    })

    const connect = async (event) => {
        event.preventDefault();
        let form = new FormData();
        form.append('email',email);
        form.append('password', password);
        await api.post('/login', form
        ,{headers:{'Content-Type': 'multipart/form-data'}}).then(
            res => { 
                console.log(res);
                localStorage.setItem('token',res.data.token);
                navigate('/home');
            }
        ).catch(function(error){
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                if(error.response.status===403){
                    setError("Echec de la connexion.Verifier vos informations de connexion.");
                }
              } else if (error.request) {
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            console.log("Not connected!");
        });
    }



    return(
        <div className="grid-container" id="container">
            <div className="grid-item">
                <span className="site-title">Report2Fix</span>
            </div>
            <div className="grid-item">
                <span className="connect-title">Connectez-vous</span>
            </div>
            <div className="grid-item" id="login-form-container">
                <form onSubmit={connect}>
                    <div className="login-form">
                        <div className="grid-item login-input">
                            <label>Adresse Email</label>
                            <input type="text" className="form-control" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="grid-item login-input">
                            <label>Mot de passe</label>
                            <input type="password" className="form-control" onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="grid-item" style={{justifyContent: 'center'}}>
                            <input type="submit" id="connectBtn" value="Se connecter" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;