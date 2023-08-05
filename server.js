const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Обробка запитів
app.get('/', (req, res) => {
  res.send('Сервер працює'); // Відповідь для кореневого маршруту
});

app.get('/api/data1', (req, res) => {
  // Зчитування даних з data1.json
  fs.readFile('data1.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Помилка зчитування файлу data1.json:', err);
      return res.status(500).json({ error: 'Помилка сервера' });
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

app.get('/api/data2', (req, res) => {
    // Зчитування даних з data1.json
    fs.readFile('data2.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Помилка зчитування файлу data2.json:', err);
        return res.status(500).json({ error: 'Помилка сервера' });
      }
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    });
  });

  app.get('/api/data3', (req, res) => {
    // Зчитування даних з data1.json
    fs.readFile('data3.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Помилка зчитування файлу data3.json:', err);
        return res.status(500).json({ error: 'Помилка сервера' });
      }
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    });
  });

// Додайте обробники для /api/data2 і /api/data3, як ви робили раніше
app.post('/api/data1', (req, res) => {
    // Отримання даних з POST-запиту
    const newData = req.body;
  
    // Зчитування даних з data1.json, як раніше
    fs.readFile('data1.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Помилка зчитування файлу data1.json:', err);
        return res.status(500).json({ error: 'Помилка сервера' });
      }
  
      // Парсимо JSON-дані
      const jsonData = JSON.parse(data);
  
      // Генеруємо новий id для нового об'єкту
      const newId = jsonData.length + 1;
  
      // Додаємо новий об'єкт з POST-даними та новим id
      const newItem = { ...newData, id: newId };
      jsonData.push(newItem);
  
      // Записуємо оновлені дані назад у data1.json
      fs.writeFile('data1.json', JSON.stringify(jsonData), 'utf8', (err) => {
        if (err) {
          console.error('Помилка запису файлу data1.json:', err);
          return res.status(500).json({ error: 'Помилка сервера' });
        }
  
        // Відповідаємо знову оновленими даними
        res.json(jsonData);
      });
    });
  });

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущений на порті ${port}`);
});
