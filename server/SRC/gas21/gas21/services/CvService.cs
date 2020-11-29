using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace gas21.services
{
    public class CvService
    {
        public async Task<string> MakeRequest(string file)
        {
            ServicePointManager.ServerCertificateValidationCallback += (sender, cert, chain, sslPolicyErrors) => true;
            ServicePointManager.SecurityProtocol = (SecurityProtocolType)3072;

            var uri = "https://lazyloadformrecognition.cognitiveservices.azure.com/formrecognizer/v2.0/prebuilt/receipt/analyze?includeTextDetail=true";

            var client = new HttpClient();
            var queryString = HttpUtility.ParseQueryString(string.Empty);

            // Request headers
            client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", "9d62c11e8fda4f3eb2c6a9cd5fa8e109");

            HttpResponseMessage response;

            // Request body
            byte[] byteData = Encoding.UTF8.GetBytes("{ \"source\": \""+ file+ "\"}");

            var content = new ByteArrayContent(byteData);
            content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            response =  await client.PostAsync(uri, content);
            var url = response.Headers.GetValues("operation-location");

            await Task.Delay(7000);

            client = new HttpClient();
            client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", "9d62c11e8fda4f3eb2c6a9cd5fa8e109");
            response =  await client.GetAsync(url.First());
            return await response.Content.ReadAsStringAsync();

        }

    }
}
