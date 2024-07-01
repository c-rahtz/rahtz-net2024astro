const API_URL = import.meta.env.RAHTZNET_CMS;
const WS_URL = import.meta.env.RAHTZNET_DIRECTUS_GRAPHQL_RAW;
const API_TOKEN = import.meta.env.RAHTZNET_FRONTEND_TOKEN;
// const socketURL = 'ws://' + WS_URL; // + API_URL;

// import { WebSocketServer } from 'ws';
// import { createClient } from 'graphql-ws';

// const client = createClient({
// 	url: {socketURL},
// 	keepAlive: 30000,
//     connectionParams: async () => {
// 		return { access_token: {API_TOKEN} };
// 	},
// });
/*
const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query {
                Pages {
                    data {
                        id
                    }
                }
          }
        `,
    }),
  });
  
const { data } = await response.json();
*/

async function getResponse() {
    const response = await fetch(API_URL+'/items/Pages/1?access_token='+API_TOKEN);
    const json = await response.json()
    return json.data

}
// const data = await response.json();
// const randomUser = data.results[0];


export async function getPageContent() {
    console.log("getPageContent");
    const data = await getResponse();
    console.log(typeof(data.Content))
    // console.log(data.data.Content)
    return data.Content
}