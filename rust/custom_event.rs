use reqwest::Client;
use serde_json::json;
use std::error::Error;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let access_token = "ACCESS TOKEN";
    let api_endpoint = "https://pams.ai/xxxx/xxxx";

    let client = Client::new();

    let data = json!({
        "event": "purchase_order",
        "form_fields": {
            "_database": "db-demo",
            "customer": "cus001",
            "total_price": 35000,
            "product_title": "Smart Phone SUPER PRO MAXIMUM"
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
