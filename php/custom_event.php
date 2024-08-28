<?php

$accessToken = "ACCESS TOKEN";
$apiEndpoint = "https://pams.ai/xxxx/xxxx";

$data = [
    "event" => "purchase_order",
    "form_fields" => [
        "_database" => "db-demo",
        "customer" => "cus001",
        "total_price" => 35000,
        "product_title" => "Smart Phone SUPER PRO MAXIMUM"
    ]
];

$ch = curl_init($apiEndpoint);

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: $accessToken",
    "Content-Type: application/json"
]);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
curl_close($ch);

if ($response === false) {
    echo 'Curl error: ' . curl_error($ch);
} else {
    $responseData = json_decode($response, true);
    print_r($responseData);
}

?>
