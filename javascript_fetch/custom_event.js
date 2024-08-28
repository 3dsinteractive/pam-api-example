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

fetch(apiEndpoint, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
