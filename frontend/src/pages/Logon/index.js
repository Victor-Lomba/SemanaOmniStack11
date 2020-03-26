import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './style.css';

import logoimg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';


export default function logon(){
    return (
       <div className="logon-container">
           <section className="form">
                <img src={logoimg} alt="Be The Hero"/>

                <form action="">
                <h1>Faça seu Logon</h1>

                <input placeholder="Sua ID"/>
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size ={16} color ="#e02041" />
                    Não tenho cadastro
                </Link>
                
                    
                </form>
           </section>

           <img src={heroesImg} alt="heroes"/>
       </div>

    );
}