'use client'

import * as actions from "@/actions"
import { useActionState } from "react"

const SnippetCreatePage = () => {
  const [formState, action] = useActionState(actions.createSnippet, { message: '' })

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-32">
            Title
          </label>
          <input type="text" name="title" className="border rounded p-2 w-full" id="title" />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-32">
            Code
          </label>
          <textarea name="code" className="border rounded p-2 w-full" id="code" />
        </div>
      </div>
      {
        formState.message ? <div className="my-2 p-2 bg-red-200 border rounded border-red-400">{formState.message}</div> : null
      }
      <button type="submit" className="rounded p-2 bg-blue-200">
        Create
      </button>
    </form>
  )
}

export default SnippetCreatePage
