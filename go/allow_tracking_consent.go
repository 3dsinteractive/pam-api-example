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
