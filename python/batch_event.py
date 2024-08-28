import requests

access_token = "ACCESS TOKEN"
api_endpoint = "https://pams.ai/xxxx/xxxx"
headers = {
    "Authorization": access_token,
    "Content-Type": "application/json"
}

data = {
    "_use_first_contact_id_for_all_events": True,
    "events": [
        {
            "event": "lead",
            "form_fields": {
                "_database": "db-public",
                "_skip_consent": True,
                "_redirect_id": "123",
                "affiliate": "pam001",
                "customer": "cus001",
                "firstname": "John",
                "lastname": "Doe",
                "email": "john@pams.com",
                "sms": "0811111111",
                "line": "Uxxxx",
                "utm_campaign": ""
            }
        },
        {
            "event": "allow_consent",
            "form_fields": {
                "_database": "db-demo",
                "_consent_message_id": "2d4yX.....fqjF0qeP",
                "_version": "latest",
                "_allow_terms_and_conditions": True,
                "_allow_privacy_overview": True,
                "_allow_necessary_cookies": True,
                "_allow_preferences_cookies": True,
                "_allow_analytics_cookies": True,
                "_allow_marketing_cookies": True,
                "_allow_social_media_cookies": True,
                "customer": "cus001"
            }
        },
        {
            "event": "allow_consent",
            "form_fields": {
                "_database": "db-demo",
                "_consent_message_id": "2d4z4...GTUnluU2d",
                "_version": "latest",
                "_allow_terms_and_conditions": True,
                "_allow_privacy_overview": True,
                "_allow_email": True,
                "_allow_sms": True,
                "_allow_line": True,
                "_allow_facebook_messenger": True,
                "_allow_push_notification": True,
                "customer": "cus001"
            }
        }
    ]
}

response = requests.post(api_endpoint, headers=headers, json=data)

print(response.status_code)
print(response.json())  # To print the response body in JSON format
