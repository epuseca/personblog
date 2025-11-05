const express = require('express');
const path = require('path');

const api = require('./routes/api');

const app = express();
const PORT = 3000;


app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' })) //thêm giới hạn cho payload khi thêm ảnh

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', api)

// Start server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});