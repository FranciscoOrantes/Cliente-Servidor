var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'ayudacontustareas18@gmail.com',
    pass: 'jesucristo123'
  }
});

var mailOptions = {
  from: 'ayudacontustareas18@gmail.com',
  to: 'mmoreno@ids.upchiapas.edu.mx',
  subject: 'cron',
  text: 'Tarea enviada con exito 173222'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 