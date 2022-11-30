import { type AppType } from "next/app"

import { trpc } from "../utils/trpc"

import "../styles/globals.css"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}

export default trpc.withTRPC(MyApp)
