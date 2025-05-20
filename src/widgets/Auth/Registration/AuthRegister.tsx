import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { login } from 'src/features/auth/slice';
import { Logo } from 'src/app/images/index';
import { Input } from 'src/shared/ui/input';
import { Button } from 'src/shared/ui/buttonAuth';
import { Title } from 'src/shared/ui/title';

import './index.css';

export const AuthRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();

  const handleRegister = async () => {
    setError('');
    setSuccess('');
    try {
      const res = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (res.ok) {
        const data = await res.json();

        dispatch(login({ token: data.token, userId: data.userId }));

        const favRes = await fetch('http://localhost:3001/favorites', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.token}`,
          },
        });

        if (favRes.ok) {
          const favoriteMovieIds = await favRes.json();
          localStorage.setItem('favoriteMovieIds', JSON.stringify(favoriteMovieIds));
        }

        setSuccess('Регистрация успешна!');
        setUsername('');
        setEmail('');
        setPassword('');
        window.location.href = '/';
      } else {
        const data = await res.json();
        setError(data.error || 'Ошибка регистрации');
      }
    } catch {
      setError('Ошибка сети');
    }
  };


  return (
    <div className="wrapper">
      <NavLink to="/kinomood/">
        <img src={Logo} alt="Logo" className="logoAuth" />
      </NavLink>
      <div className="wrapper__content">
        <Title as="h2" size="medium">
          Зарегистрируйся
          <br />
          или войди
        </Title>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Введите имя пользователя"
          className="inputAuth"
          classNameButton="inputButtonAuth"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите email"
          className="inputAuth"
          classNameButton="inputButtonAuth"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Введите пароль"
          className="inputAuth"
          classNameButton="inputButtonAuth"
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>{success}</div>}
        <Button classNameContainer="buttonAuth" onClick={handleRegister}>
          Зарегистрироваться
        </Button>
        <NavLink to="/kinomood/login/" className="backAuth">
          Уже есть аккаунт? Войти
        </NavLink>
      </div>
    </div>
  );
};
