const axios = require("axios");

const accessToken = "ACCESS TOKEN";
const apiEndpoint = "https://pams.ai/xxxx/xxxx";

const headers = {
  Authorization: accessToken,
  "Content-Type": "application/json",
};

const data = {
  _use_first_contact_id_for_all_events: true,
  events: [
    {
      event: "lead",
      form_fields: {
        _database: "db-public",
        _skip_consent: true,
        _redirect_id: "123",
        affiliate: "pam001",
        customer: "cus001",
        firstname: "John",
        lastname: "Doe",
        email: "john@pams.com",
        sms: "0811111111",
        line: "Uxxxx",
        utm_campaign: "",
      },
    },
    {
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
    },
    {
      event: "allow_consent",
      form_fields: {
        _database: "db-demo",
        _consent_message_id: "2d4z4...GTUnluU2d",
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
    },
  ],
};

axios
  .post(apiEndpoint, data, { headers: headers })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
