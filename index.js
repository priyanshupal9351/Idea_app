const express = require('express');


const app = express();
const PORT = process.env.PORT || 5100;

app.use(express.json());

const idea_route = require('./src/routes/user.routes');

app.use('/idea_app/v1', idea_route);



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})