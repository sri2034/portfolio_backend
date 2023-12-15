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
      pass: 'uxenigxnmkvumqbh',
    },
  });

  const mailOptions = {
    from: 'pavansriram285@gmail.com',
    to: 'pavansriramkurukuri3@gmail.com',
    subject: `Job Update From Portfolio: ${subject}`,
    html: `
      <i> HI, KPS you have a message from ${name} </i>
      <h2> Here is the subject <br> ${subject} </h2>
      <h2>Check description here <br> ${Description} </h2>
      <i><b> Reply them at ${email} </b></i>
    `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('<h1 style="text-align:center;margin:200px"><i> Your message recieved <br> <p> THANK YOU </p> </h1></i>');
  });
});

app.listen(4000, () => {
  console.log(`Server started successfully`);
});
