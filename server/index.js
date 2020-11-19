const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const app = express();

// const mailer = require("./smtpGmail");
const { schema } = require("./graphQL/schema/schema");
const { root } = require("./graphQL/resolvers/resolvers");

app.use(bodyParser.json());
app.use(express.static("myproject"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

var shoppingCart = [];

app.get("/shoppingCart", (req, res) => {
  res.send(JSON.stringify(shoppingCart));
});

app.get("/shoppingCart/:shoppingCartId", (req, res) => {
  res.send(JSON.stringify(shoppingCart[req.params.shoppingCart]));
});

app.put("/shoppingCart/:shoppingCartId", (req, res) => {
  shoppingCart[req.params.shoppingCart] = req.body;
  res.send(JSON.stringify(shoppingCart[req.params.shoppingCart]));
});

app.delete("/shoppingCart/:shoppingCartId", (req, res) => {
  shoppingCart[req.params.shoppingCart] = null;
  res.send(JSON.stringify(shoppingCart[req.params.shoppingCart]));
});

app.post("/shoppingCart", (req, res) => {
  shoppingCart.push(req.body);
  console.log(req.body);
  res.status(201).send(req.body);
});



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
