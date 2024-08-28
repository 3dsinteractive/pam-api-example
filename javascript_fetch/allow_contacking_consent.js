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

fetch(apiEndpoint, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
