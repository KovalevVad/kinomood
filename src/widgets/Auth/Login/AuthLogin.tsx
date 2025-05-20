import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { login } from 'src/features/auth/slice';
import { Logo } from 'src/app/images/index';
import { Input } from 'src/shared/ui/input';
import { Button } from 'src/shared/ui/buttonAuth';
import { Title } from 'src/shared/ui/title';

import './index.css';

export const AuthLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
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
          localStorage.setItem(
            'favoriteMovieIds',
            JSON.stringify(favoriteMovieIds)
          );
        } else {
          console.warn('Не удалось загрузить избранные фильмы');
        }

       navigate('/kinomood/');
      } else {
        const data = await res.json();
        setError(data.error || 'Неверный логин или пароль');
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
          Войти
        </Title>
        <Input
          className="inputAuth"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите email"
          classNameButton="inputButtonAuth"
        />
        <Input
          className="inputAuth"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Введите пароль"
          classNameButton="inputButtonAuth"
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Button classNameContainer="buttonAuth" onClick={handleLogin}>
          Войти
        </Button>
        <NavLink to="/kinomood/register/" className="backAuth">
          Нет аккаунта? Зарегистрироваться
        </NavLink>
      </div>
    </div>
  );
};
