
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./router');

// const fs = require('fs');
// const path = require('path');


// const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });


// morgan('default', (tokens, req, res) => [
//   tokens.method(req, res),
//   tokens.url(req, res),
//   tokens.status(req, res),
//   tokens.res(req, res, 'content-length'), '-',
//   tokens['response-time'](req, res), 'ms'
// ].join(' '));

// const datas = [
//   {
//     id: 1,
//     data: {
//       region: {
//         name: 'Africa',
//         avgAge: 19.7,
//         avgDailyIncomeInUSD: 5,
//         avgDailyIncomePopulation: 0.71
//       },
//       periodType: 'days',
//       timeToElapse: 58,
//       reportedCases: 674,
//       population: 66622705,
//       totalHospitalBeds: 1380614
//     }
//   }
// ];
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);


// morgan((req, res) => `${req.method}  ${req.url}  ${req.response-time}`);

// app.get('/api/v1/on-covid-19/log', (req, res, next) => {
//   res.send('here');
//   next();
// });

// app.post('/api/v1/on-covid-19', (req, res) => {
//   let covid = req.body;
//   covid = covid19ImpactEstimator(covid);
//   res.json(covid);
// });

// app.post('/api/v1/on-covid-19/json', (req, res) => {
//   let covid = req.body;
//   covid = covid19ImpactEstimator(covid);
//   res.json(covid);
// });

// app.post('/api/v1/on-covid-19/xml', (req, res) => {
//   let covid = req.body;
//   covid = covid19ImpactEstimator(covid);
//   res.type('application/xml').send(js2xmlparser.parse('response', covid));
// });

// app.get('/api/covid', (req, res)=>{

// })

const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`listening to port ${port}..`));
