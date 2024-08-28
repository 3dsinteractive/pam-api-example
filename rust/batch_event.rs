use reqwest::Client;
use serde_json::json;
use std::error::Error;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let access_token = "ACCESS TOKEN";
    let api_endpoint = "https://pams.ai/xxxx/xxxx";

    let client = Client::new();

    let data = json!({
        "_use_first_contact_id_for_all_events": true,
        "events": [
            {
                "event": "lead",
                "form_fields": {
                    "_database": "db-public",
                    "_skip_consent": true,
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
                    "_allow_terms_and_conditions": true,
                    "_allow_privacy_overview": true,
                    "_allow_necessary_cookies": true,
                    "_allow_preferences_cookies": true,
                    "_allow_analytics_cookies": true,
                    "_allow_marketing_cookies": true,
                    "_allow_social_media_cookies": true,
                    "customer": "cus001"
                }
            },
            {
                "event": "allow_consent",
                "form_fields": {
                    "_database": "db-demo",
                    "_consent_message_id": "2d4z4...GTUnluU2d",
                    "_version": "latest",
                    "_allow_terms_and_conditions": true,
                    "_allow_privacy_overview": true,
                    "_allow_email": true,
                    "_allow_sms": true,
                    "_allow_line": true,
                    "_allow_facebook_messenger": true,
                    "_allow_push_notification": true,
                    "customer": "cus001"
                }
            }
        ]
    });

    let response = client.post(api_endpoint)
        .header("Authorization", access_token)
        .header("Content-Type", "application/json")
        .json(&data)
        .send()
        .await?;

    if response.status().is_success() {
        let response_text = response.text().await?;
        println!("Response: {}", response_text);
    } else {
        println!("Request failed with status: {}", response.status());
    }

    Ok(())
}
