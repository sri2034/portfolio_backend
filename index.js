const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
  const { name, email, subject, Description } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pavansriram285@gmail.com',
      pass: 'mkowjrybudkawwtj',
    },
  });

  const mailOptions = {
    from: 'pavansriram285@gmail.com',
    to: 'pavansriramkurukuri3@gmail.com',
    subject: `You have Connect from Portfolio`,
    html: `
      <i> Hi, Pavan Sriram Kurukuri, you have a message from ${name} </i>
      <h2>Regarding, ${subject} </h2>
      <h2>Check the following description<br> ${Description} </h2>
      <i><b>You can connect with them at ${email} </b></i>
    `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('<h1 style="text-align:center;margin:200px"><i> Your Connection Request recieved <br> <p> THANK YOU </p><br> <p>I will respond as soon as possible</p> </h1></i>');
  });
});

app.listen(4000, () => {
  console.log(`Server started successfully`);
});
