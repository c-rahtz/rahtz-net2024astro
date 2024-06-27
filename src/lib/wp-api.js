const API_URL = import.meta.env.RAHTZNET_CMS_WP;

// api functions sourced here: https://blog.openreplay.com/building-an-astro-website-with-wordpress-as-a-headless-cms/
async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });
  
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }
  
    return json.data;
}

export async function getPageBySlug(slug) {
    const data = await fetchAPI(`
    {
      page(id: "${slug}", idType: URI) {
        title
        content
      }
    }
    `);
    return data?.page;
  }