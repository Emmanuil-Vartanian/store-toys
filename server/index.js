const express = require("express");
const bodyParser = require("body-parser");
// const { graphqlHTTP } = require("express-graphql");
const app = express();

const mailer = require("./smtpGmail");
// const { schema } = require("./graphQL/schema/schema");
// const { root } = require("./graphQL/resolvers/resolvers");

app.use(bodyParser.json());
app.use(express.static("myproject"));

var users = [];

app.get("/user", (req, res) => {
  res.send(JSON.stringify(users));
});

app.post("/user", (req, res) => {
  users.push(req.body);
  console.log(req.body);
  const message = {
    to: "super.detskieigruski@gmail.com",
    subject: "Заказ",
    text: `Данные о заказе:
      Имя: ${req.body.firstName}
      Фамилия: ${req.body.lastName}
      Город: ${req.body.city}
      Отделение новой почты: ${req.body.newMail}
      Телефон: ${req.body.telephone}
      
      Название игрушек: ${req.body.dataToys.map(obj => obj.title)}
      Цена игрушек: ${req.body.dataToys.map(obj => obj.price)}`
  };
  mailer(message);
  res.status(201).send(req.body);
});

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );


// app.get("/user", (req, res) => {
//   res.send(JSON.stringify(users));
// });

// app.post("/user", (req, res) => {
//   users.push(req.body);
//   console.log(req.body);
//   const message = {
//     to: "super.detskieigruski@gmail.com",
//     subject: "Заказ",
//     text: `Данные о заказе:
//       Имя: ${req.body.userName}
//       Фамилия: ${req.body.userLastName}
//       Город: ${req.body.userCity}
//       Отделение новой почты: ${req.body.userNewMail}
//       Телефон: ${req.body.userPhone}`
//   };
//   mailer(message);
//   res.status(201).send(req.body);
// });

app.listen(5556, () => console.log("The server started on port 5556"));
