const express = require('express');
const movieRoutes = require('./routes/movie');
const userRoutes = require('./routes/user');
const { logger } = require('./middleware/logger');
const { notFound } = require('./middleware/notFound');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

//middleware -> parse data from client to server
//reads the json sent by the client 
// converts it into a js object
//attached to req.body
app.use(express.json());
app.use(logger);

app.use("/api/users", userRoutes);

app.use("/api/movies", movieRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});