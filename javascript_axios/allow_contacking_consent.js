const axios = require("axios");

const accessToken = "ACCESS TOKEN";
const apiEndpoint = "https://pams.ai/xxxx/xxxx";

const headers = {
  Authorization: accessToken,
  "Content-Type": "application/json",
};

const data = {
  event: "allow_consent",
  form_fields: {
    _database: "db-demo",
    _consent_message_id: "2d4z4k....TUnluU2d",
    _version: "latest",
    _allow_terms_and_conditions: true,
    _allow_privacy_overview: true,
    _allow_email: true,
    _allow_sms: true,
    _allow_line: true,
    _allow_facebook_messenger: true,
    _allow_push_notification: true,
    customer: "cus001",
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
