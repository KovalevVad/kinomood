// routes/favorites.js
const express = require('express');
const pool = require('../db');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Добавить фильм в избранное
router.post('/favorites', authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const { movie_id } = req.body;

  try {
    await pool.query(
      'INSERT INTO favorites (user_id, movie_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [userId, movie_id]
    );
    res.json({ success: true, message: 'Фильм добавлен в избранное' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Получить избранные фильмы пользователя
router.get('/favorites', authMiddleware, async (req, res) => {
  const userId = req.user.id;

  try {
    const result = await pool.query(
      'SELECT movie_id FROM favorites WHERE user_id = $1',
      [userId]
    );
    res.json(result.rows.map(row => row.movie_id));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Удалить фильм из избранного
router.delete('/favorites/:movie_id', authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const { movie_id } = req.params;

  try {
    await pool.query(
      'DELETE FROM favorites WHERE user_id = $1 AND movie_id = $2',
      [userId, movie_id]
    );
    res.json({ success: true, message: 'Фильм удален из избранного' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
