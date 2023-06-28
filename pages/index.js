import React from "react"
import Navbar from "@/components/nav"
import Carousel from "@/components/carousel";
import { FormattedMessage, useIntl } from "react-intl";
export default function Home() {
  return (
    <main>
      <FormattedMessage id="nav.about" />
      <Carousel />
    </main>

  )
}