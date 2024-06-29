import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet'
import Cookies from 'js-cookie';

import Header from '../components/header'
import LoginForm from '../components/login-form'
import Registration from '../components/registration'
import FooterGray from '../components/footer-gray'
import HeaderFull from '../components/header-full'
import './register.css'

const Register = () => {
const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);  // По умолчанию форма входа видна
const [isLoggedIn, setIsLoggedIn] = useState(false);

// Для переключения на форму регистрации
  const toggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div className="register-container">
      <Helmet>
        <title>Вход</title>
        <meta property="og:title" content="Вход" />
      </Helmet>

      <div className="register-form">
        {/* Переключение между формами */}
        <div className="register-contact1 thq-section-padding">
          {isLoginFormVisible ? (
            <LoginForm toggleForm={toggleForm} setIsLoggedIn={setIsLoggedIn}/>
          ) : (
            <Registration toggleForm={toggleForm} rootClassName="registration-root-class-name" />
          )}
        </div>
          <div className="register-container1"></div>
      </div>
      <FooterGray></FooterGray>
    </div>

  )
}

export default Register
