const axios = require("axios");

const accessToken = "ACCESS TOKEN";
const apiEndpoint = "https://pams.ai/xxxx/xxxx";

const headers = {
  Authorization: accessToken,
  "Content-Type": "application/json",
};

const data = {
  event: "purchase_order",
  form_fields: {
    _database: "db-demo",
    customer: "cus001",
    total_price: 35000,
    product_title: "Smart Phone SUPER PRO MAXIMUM",
  },
};

axios
  .post(apiEndpoint, data, { headers: headers })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
