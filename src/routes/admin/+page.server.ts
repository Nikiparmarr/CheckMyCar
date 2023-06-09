import { addArticle, getArticle } from '$lib/server/db'
import type { PageServerLoad, Actions } from './$types';


export async function load() {
    let resp = await getArticle({ id: 39 })

    return { resp }
}


export const actions = {
    add: async ({ request }) => {
        const data = await request.formData();
        const title = data.get('title');
        const desc = data.get("description")
        const slug = data.get("slug")
        const mkdwn = data.get("markdown")


        let resp = addArticle({
            title: title,
            description: desc,
            slug: slug,
            markdown: mkdwn
        })
        // let resp = getArticle({ id: 23 })
        console.log(resp)
    }

} 