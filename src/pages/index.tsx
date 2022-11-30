import { type NextPage } from "next"
import Head from "next/head"

import { trpc } from "../utils/trpc"
import styles from "./index.module.css"
import type {FormEvent} from "react"
import { useEffect, useState} from "react"
import {toast} from "react-toastify"

const Home: NextPage = () => {
  const duck = trpc.generate.duck.useMutation()
  const [value, setValue] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    duck.mutate({
      apiKey: value
    })
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(duck.data?.address as string)
  }

  useEffect(() => {
    if (duck.isError) {
      switch (duck.error.data?.code) {
      case "BAD_REQUEST":
        toast.error("API key has an invalid format")
        return
      case "INTERNAL_SERVER_ERROR":
        toast.error("Error from DuckDuckGo - has your API key expired?")
        return
      default:
        toast.error("An error occurred.")
      }
    }
  }, [duck])

  return (
    <>
      <Head>
        <title>Duck Generator</title>
        <meta name="description" content="Generate DuckDuckGo emails!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#8360c3] to-[#2ebf91]">
        <section className={styles.box}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className={styles.formGroup}>
              <label htmlFor="apiKey">API Key</label>
              <input
                id="apiKey"
                type="password"
                required
                minLength={62}
                maxLength={62}
                value={value}
                onChange={e => setValue(e.currentTarget.value)}
              />
            </div>
            <button className={styles.button} disabled={duck.isLoading}>
              {duck.isLoading ? "Generating..." : "Generate"}
            </button>
          </form>
          {duck.data && (
            <div className={styles.result}>
              <span>{duck.data.address}</span>
              <button onClick={copyToClipboard}>Copy</button>
            </div>)}
        </section>
      </main>
    </>
  )
}

export default Home
