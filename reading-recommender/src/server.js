
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const port = 3333;
// const app = express();
// // const token =
// //   'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

// let nextId = 7;
const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let quizQuestions = [
  {   
      id: 1,
      question: "What franchise would you rather play a game from?",
      answers: [
          {   
              type: "Microsoft",
              content: "Halo"
          },
          {
              type: "Nintendo",
              content: "Pokemon"
          },
          {
              type: "Sony",
              content: "Uncharted"
          }
      ]
  },
  {
      id: 2,
      question: "Which console would you prefer to play with friends?",
      answers: [
          {
              type: "Microsoft",
              content: "X-Box"
          },
          {
              type: "Nintendo",
              content: "Nintendo 64"
          },
          {
              type: "Sony",
              content: "Playstation 1"
          }
      ]
  },
  {
      id: 3,
      question: "Which of these racing franchises would you prefer to play a game from?",
      answers: [
          {
              type: "Microsoft",
              content: "Forza"
          },
          {
              type: "Nintendo",
              content: "Mario Kart"
          },
          {
              type: "Sony",
              content: "Gran Turismo"
          }
      ]
  },
  {
      id: 4,
      question: "Which of these games do you think is best?",
      answers: [
          {
              type: "Microsoft",
              content: "BioShock"
          },
          {
              type: "Nintendo",
              content: "The Legend of Zelda: Ocarina of Time"
          },
          {
              type: "Sony",
              content: "Final Fantasy VII"
          }
      ]
  },
  {
      id: 5,
      question: "What console would you prefer to own?",
      answers: [
          {
              type: "Microsoft",
              content: "X-Box One"
          },
          {
              type: "Nintendo",
              content: "Wii U"
          },
          {
              type: "Sony",
              content: "Playstation 4"
          }
      ]
  }
];

// app.use(bodyParser.json());

// app.use(cors());

// function authenticator(req, res, next) {
//   const { authorization } = req.headers;
//   if (authorization === token) {
//     next();
//   } else {
//     res.status(403).json({ error: 'User be logged in to do that.' });
//   }
// }

// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body;
//   if (username === 'admin' && password === 'password') {
//     req.loggedIn = true;
//     res.status(200).json({
//       payload: token
//     });
//   } else {
//     res
//       .status(403)
//       .json({ error: 'Username or Password incorrect. Please see Readme' });
//   }
// });

// app.get('/api', authenticator, (req, res) => {
//   setTimeout(() => {
//     res.send(quizQuestions);
//   }, 1000);
// });

// app.get('/api/quizQuestions/:id', authenticator, (req, res) => {
//   const question = quizQuestions.find(f => f.id == req.params.id);

//   if (question) {
//     res.status(200).json(question);
//   } else {
//     res.status(404).send({ msg: 'Friend not found' });
//   }
// });

// app.post('/api/quizQuestions', authenticator, (req, res) => {
//   const question = { id: getNextId(), ...req.body };

//   quizQuestions = [...quizQuestions, question];

//   res.send(quizQuestions);
// });

// app.put('/api/quizQuestions/:id', authenticator, (req, res) => {
//   const { id } = req.params;

//   const questionIndex = quizQuestions.findIndex(f => f.id == id);

//   if (questionIndex > -1) {
//     const question = { ...quizQuestions[questionIndex], ...req.body };

//     quizQuestions = [
//       ...quizQuestions.slice(0, questionIndex),
//       question,
//       ...quizQuestions.slice(questionIndex + 1)
//     ];
//     res.send(quizQuestions);
//   } else {
//     res.status(404).send({ msg: 'question not found' });
//   }
// });

// app.delete('/api/quizQuestions/:id', authenticator, (req, res) => {
//   const { id } = req.params;

//   quizQuestions = quizQuestions.filter(f => f.id !== Number(id));

//   res.send(quizQuestions);
// });

// function getNextId() {
//   return nextId + 1;
// }

// app.listen(port, () => {
//   console.log(`server listening on port ${port}`);
// });
app.get('/api/quizQuestions', (req, res) => {
	res.send(quizQuestions);
});

app.get('/api/quizQuestions/:id', (req, res) => {
	const movie = quizQuestions.filter(movie => movie.id.toString() === req.params.id)[0];
	res.status(200).json(movie);
});

app.post('/api/quizQuestions', (req, res) => {
	if (req.body.id !== undefined) quizQuestions.push(req.body);
	res.status(201).json(quizQuestions);
});

app.listen(3333, () => {
	console.log('Server listening on port 3333');
});