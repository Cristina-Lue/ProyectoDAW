const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conectar a la base de datos MongoDB
// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/hotel');


// Definir un esquema y modelo para los usuarios
const UserSchema = new mongoose.Schema({
    nombres: String,
    apellidos: String,
    telefono: String,
    email: String,
    dui: String,
});

const User = mongoose.model('User', UserSchema);

// Servir archivos estáticos desde 'Pantalla1'
app.use('/Pantalla1', express.static(path.join(__dirname, 'Pantalla1')));
// Servir archivos estáticos desde las carpetas dentro de 'Pantalla1'
app.use('/CSS', express.static(path.join(__dirname, 'Pantalla1', 'CSS')));
app.use('/JS', express.static(path.join(__dirname, 'Pantalla1', 'JS')));
app.use('/IMG', express.static(path.join(__dirname, 'Pantalla1', 'IMG')));

// Servir archivos estáticos desde 'Registro'
app.use('/Registro', express.static(path.join(__dirname, 'Registro')));

// Servir archivos estaticos desde'inicioSesion'
app.use('/InicioSesion', express.static(path.join(__dirname, 'InicioSesion')));

// Servir archivos estáticos desde 'Pantalla2'
app.use('/Pantalla2', express.static(path.join(__dirname, 'Pantalla2')));

// Servir archivos estáticos desde 'Pantalla3'
app.use('/Pantalla3', express.static(path.join(__dirname, 'Pantalla3')));

// Servir archivos estáticos desde 'Pantalla4'
app.use('/Pantalla4', express.static(path.join(__dirname, 'Pantalla4')));

// Servir archivos estáticos desde 'Pantalla5'
app.use('/Pantalla5', express.static(path.join(__dirname, 'Pantalla5')));

// Servir archivos estáticos desde 'Pantalla6'
app.use('/Pantalla6', express.static(path.join(__dirname, 'Pantalla6')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Pantalla1', 'Pantalla1.html'));
});

// Ruta para manejar el registro
app.post('/api/register', async (req, res) => {
    const { nombres, apellidos, telefono, email, dui } = req.body;

    try {
        const newUser = new User({ nombres, apellidos, telefono, email, dui });
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario', error });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.post('/api/login', async (req, res) => {
    const { nombres, apellidos, dui } = req.body;

    try {
        const user = await User.findOne({ nombres, apellidos, dui });
        if (!user) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
});
