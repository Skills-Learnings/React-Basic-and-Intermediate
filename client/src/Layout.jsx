import React from "react"
import Header from "./components/Header"
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom"

export default function Layout() {
  const { state } = useNavigation()

  return (
    <>
      <Header />
      <ScrollRestoration />
      {state === "loading" ? (
        <div className="loading-spinner"></div>
      ) : undefined}
      <div className={`container ${state === "loading" ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  )
}
