using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Net;
using System.Net.Http;

namespace ZipCodeLookup
{
    public class Class1
    {
        private const string URL = "https://us-zipcode.api.smartystreets.com/lookup";
        private const string urlParameters = "?auth-id=0a34465a-493a-32b2-221c-81c249cd16cd&auth-token=Pmins7HA7UaJBkp71KLF&zipcode=94035";

        static void Main(string[] args)
        {
            Class1.CreateObject();
        }

        private static void CreateObject()
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(URL + urlParameters);
            request.Method = "Get";

            try
            {
                using (var httpClient = new HttpClient())
                {
                    string response = httpClient.GetStringAsync(new Uri(URL + urlParameters)).Result;
                    response = response.Remove(0,1);
                    response = response.Remove(response.Length - 1, 1);
                    dynamic json1 = JObject.Parse(response);
                    Console.WriteLine("Zipcode : " + json1.zipcodes[0].zipcode);
                    Console.WriteLine("City : " + json1.zipcodes[0].default_city);
                    Console.WriteLine("State : " + json1.zipcodes[0].state);
                    Console.Read();
                }
            }
            catch (Exception e)
            {
                Console.Out.WriteLine("-----------------");
                Console.Out.WriteLine(e.Message);
            }
        }
    }
}