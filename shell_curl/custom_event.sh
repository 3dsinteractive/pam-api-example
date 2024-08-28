#!/bin/sh

ACCESS_TOKEN="ACCESS TOKEN"
API_ENDPOINT="https://pams.ai/xxxx/xxxx"

curl --location "$API_ENDPOINT" \
--header "Authorization: $ACCESS_TOKEN" \
--header 'Content-Type: application/json' \
--data '{
            "event": "purchase_order",
            "form_fields": {
                "_database": "db-demo",
                "customer": "cus001",
                "total_price": 35000,
                "product_title": "Smart Phone SUPER PRO MAXIMUM"
            }
        }'
