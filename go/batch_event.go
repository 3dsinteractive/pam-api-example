package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

func main() {
	accessToken := "ACCESS TOKEN"
	apiEndpoint := "https://pams.ai/xxxx/xxxx"

	data := map[string]interface{}{
		"_use_first_contact_id_for_all_events": true,
		"events": []map[string]interface{}{
			{
				"event": "lead",
				"form_fields": map[string]interface{}{
					"_database":     "db-public",
					"_skip_consent": true,
					"_redirect_id":  "123",
					"affiliate":     "pam001",
					"customer":      "cus001",
					"firstname":     "John",
					"lastname":      "Doe",
					"email":         "john@pams.com",
					"sms":           "0811111111",
					"line":          "Uxxxx",
					"utm_campaign":  "",
				},
			},
			{
				"event": "allow_consent",
				"form_fields": map[string]interface{}{
					"_database":                   "db-demo",
					"_consent_message_id":         "2d4yX.....fqjF0qeP",
					"_version":                    "latest",
					"_allow_terms_and_conditions": true,
					"_allow_privacy_overview":     true,
					"_allow_necessary_cookies":    true,
					"_allow_preferences_cookies":  true,
					"_allow_analytics_cookies":    true,
					"_allow_marketing_cookies":    true,
					"_allow_social_media_cookies": true,
					"customer":                    "cus001",
				},
			},
			{
				"event": "allow_consent",
				"form_fields": map[string]interface{}{
					"_database":                   "db-demo",
					"_consent_message_id":         "2d4z4...GTUnluU2d",
					"_version":                    "latest",
					"_allow_terms_and_conditions": true,
					"_allow_privacy_overview":     true,
					"_allow_email":                true,
					"_allow_sms":                  true,
					"_allow_line":                 true,
					"_allow_facebook_messenger":   true,
					"_allow_push_notification":    true,
					"customer":                    "cus001",
				},
			},
		},
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		fmt.Println("Error marshaling JSON:", err)
		os.Exit(1)
	}

	req, err := http.NewRequest("POST", apiEndpoint, bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println("Error creating request:", err)
		os.Exit(1)
	}

	req.Header.Set("Authorization", accessToken)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error sending request:", err)
		os.Exit(1)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		fmt.Printf("Received non-OK response: %s\n", resp.Status)
	} else {
		fmt.Println("Request successful")
	}
}
