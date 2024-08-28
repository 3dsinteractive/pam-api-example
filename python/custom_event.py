import requests

access_token = "ACCESS TOKEN"
api_endpoint = "https://pams.ai/xxxx/xxxx"
headers = {
    "Authorization": access_token,
    "Content-Type": "application/json"
}

data = {
    "event": "purchase_order",
    "form_fields": {
        "_database": "db-demo",
        "customer": "cus001",
        "total_price": 35000,
        "product_title": "Smart Phone SUPER PRO MAXIMUM"
    }
}

response = requests.post(api_endpoint, headers=headers, json=data)

print(response.status_code)
print(response.json())  # To print the response body in JSON format
