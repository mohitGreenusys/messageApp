const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Numbers = require('./numbers.model');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/numbers', (req, res) => {
    const numbers = new Numbers({
        numbers: req.body.numbers
    });
    numbers.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/numbers/:id', async(req, res) => {
    try {
        const numbers = await Numbers.findById(req.params.id);

        if(!numbers) {
            return res.status(404).json({msg: "Numbers not found"});
        }

        res.json(numbers);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Server Error", error: error});
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);


mongoose.connect('mongodb+srv://mohit:tvZ0pRHsVUGsgRTu@testingbanking.guelwy7.mongodb.net/messageApp?retryWrites=true&w=majority', {useNewUrlParser: true}).then(() =>
app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
})
)
.catch((err) => console.log(err));;