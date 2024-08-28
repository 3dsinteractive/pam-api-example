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
                _consent_message_id = "2d4z4k....TUnluU2d",
                _version = "latest",
                _allow_terms_and_conditions = true,
                _allow_privacy_overview = true,
                _allow_email = true,
                _allow_sms = true,
                _allow_line = true,
                _allow_facebook_messenger = true,
                _allow_push_notification = true,
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
