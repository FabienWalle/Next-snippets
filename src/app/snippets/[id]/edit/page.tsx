import SnippetEditForm from "@/components/snippet-edit-form"
import { db } from "@/db"
import { notFound } from "next/navigation"

interface SnippetEditPageProps {
    params: Promise<{ id: string }>
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
    const id = parseInt((await props.params).id)

    const snippet = await db.snippet.findFirst({
        where: { id }
    })

    if (!snippet) {
        notFound()
    }

    return <div>
        <SnippetEditForm snippet={snippet} />
    </div>
}

export async function generateStaticParams() {
    const snippets = await db.snippet.findMany()
    return snippets.map((snippet) => {
        return {
            id:snippet.id.toString()
        }
    })
}