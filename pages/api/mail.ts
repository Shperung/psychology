import nodemailer from 'nodemailer';

// Step 1
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  port: 468,
  host: 'smtp.gmail.com',
  secure: false,
});

const globalMailOptions = {
  from: 't.g.redko@gmail.com',
  to: 'viktorkrav4uk87@gmail.com, t.g.redko@gmail.com',
};


const jsonHeaders = {
  Accept: 'application/json',
  "Content-Type": "application/json"
}


export default function mail(req, res) {

  console.log('process.env.EMAIL', process.env.EMAIL);
  console.log('process.env.PASSWORD', process.env.PASSWORD);


  if (req.body.name && req.body.phone) {
    const mailOptions = {   
      ...globalMailOptions,
       subject: 'Повідомлення з сайту tetiana-redko.com',
       text: `Відправлена заявка з сайту 
         \n Ім’я - ${req.body.name}
         \n Телефон - ${req.body.phone}
         \n Eail - ${req.body.email || ''}
         \n Повідомлення - ${req.body.text || ''}
         \n --------------------------
       `,
    }

    transporter.sendMail(mailOptions, function (err, data) {
     if (err) {
       console.log('err', err);
       console.log('Не вдалось відправити заявку. Спробуйте пізніше');
       const msgs = JSON.stringify({
        msg: "Не вдалось відправити заявку. Спробуйте пізніше",
        status: 'error',
      });
      res.writeHead(400, jsonHeaders);
      res.end(msgs);
     } else {
        console.log('Заявка успішно відправлена');
        const msgs = JSON.stringify({
          msg: "Заявка успішно відправлена",
          status: 'success',
        });
        res.writeHead(200, jsonHeaders);
        res.end(msgs);
     }
    });
    } else {
    const msgs = JSON.stringify({
      msg: "Перевірте введені дані",
      status: 'info',
    });
    res.writeHead(400, jsonHeaders);
    res.end(msgs);
  }


}
