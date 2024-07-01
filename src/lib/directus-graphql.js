const API_URL = import.meta.env.RAHTZNET_CMS;
const WS_URL = import.meta.env.RAHTZNET_DIRECTUS_GRAPHQL_RAW;
const API_TOKEN = import.meta.env.RAHTZNET_FRONTEND_TOKEN;
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

async function getResponse(page_id) {
    const response = await fetch(API_URL+'/items/pages/'+page_id+'?access_token='+API_TOKEN);
    const json = await response.json()
    return json.data
}


export async function getPageData(page_id) {
    // console.log("getPageContent");
    // const data = await getResponse(page_id);
    // console.log(typeof(data.Content))
    // console.log(data.content)
    // return data

    const response = await fetch(API_URL+'/items/pages/'+page_id+'?access_token='+API_TOKEN);
    const json = await response.json()
    return json.data
}