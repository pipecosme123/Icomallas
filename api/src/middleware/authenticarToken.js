import jwt from 'jsonwebtoken';

export const authenticarToken = (req, res, next) => {
    
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).send('Acceso denegado');

    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Token no válido');
        console.log(err);
    }
}