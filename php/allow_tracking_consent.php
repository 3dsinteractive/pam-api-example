<?php

$accessToken = "ACCESS TOKEN";
$apiEndpoint = "https://pams.ai/xxxx/xxxx";

$data = [
    "event" => "allow_consent",
    "form_fields" => [
        "_database" => "db-demo",
        "_consent_message_id" => "2d4yX.....fqjF0qeP",
        "_version" => "latest",
        "_allow_terms_and_conditions" => true,
        "_allow_privacy_overview" => true,
        "_allow_necessary_cookies" => true,
        "_allow_preferences_cookies" => true,
        "_allow_analytics_cookies" => true,
        "_allow_marketing_cookies" => true,
        "_allow_social_media_cookies" => true,
        "customer" => "cus001"
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
