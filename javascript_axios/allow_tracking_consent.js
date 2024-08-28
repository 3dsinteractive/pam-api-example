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
    _consent_message_id: "2d4yX.....fqjF0qeP",
    _version: "latest",
    _allow_terms_and_conditions: true,
    _allow_privacy_overview: true,
    _allow_necessary_cookies: true,
    _allow_preferences_cookies: true,
    _allow_analytics_cookies: true,
    _allow_marketing_cookies: true,
    _allow_social_media_cookies: true,
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
