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

fetch(apiEndpoint, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
