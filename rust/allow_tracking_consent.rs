use reqwest::Client;
use serde_json::json;
use std::error::Error;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let access_token = "ACCESS TOKEN";
    let api_endpoint = "https://pams.ai/xxxx/xxxx";

    let client = Client::new();

    let data = json!({
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
