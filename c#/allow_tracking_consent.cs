using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

class Program
{
    static async Task Main(string[] args)
    {
        string accessToken = "ACCESS TOKEN";
        string apiEndpoint = "https://pams.ai/xxxx/xxxx";

        var data = new
        {
            @event = "allow_consent",
            form_fields = new
            {
                _database = "db-demo",
                _consent_message_id = "2d4yX.....fqjF0qeP",
                _version = "latest",
                _allow_terms_and_conditions = true,
                _allow_privacy_overview = true,
                _allow_necessary_cookies = true,
                _allow_preferences_cookies = true,
                _allow_analytics_cookies = true,
                _allow_marketing_cookies = true,
                _allow_social_media_cookies = true,
                customer = "cus001"
            }
        };

        string jsonData = JsonConvert.SerializeObject(data);

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("Authorization", accessToken);
            var content = new StringContent(jsonData, Encoding.UTF8, "application/json");

            HttpResponseMessage response = await client.PostAsync(apiEndpoint, content);

            if (response.IsSuccessStatusCode)
            {
                string responseBody = await response.Content.ReadAsStringAsync();
                Console.WriteLine("Response: " + responseBody);
            }
            else
            {
                Console.WriteLine("Error: " + response.StatusCode);
            }
        }
    }
}
