using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        string accessToken = "ACCESS TOKEN";
        string apiEndpoint = "https://pams.ai/xxxx/xxxx";

        var data = new
        {
            @event = "purchase_order",
            form_fields = new
            {
                _database = "db-demo",
                customer = "cus001",
                total_price = 35000,
                product_title = "Smart Phone SUPER PRO MAXIMUM"
            }
        };

        string jsonData = Newtonsoft.Json.JsonConvert.SerializeObject(data);

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
