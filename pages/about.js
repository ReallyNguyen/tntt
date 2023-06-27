import React from "react"
import Navbar from "@/components/nav"
import { FormattedMessage, useIntl } from "react-intl";

export default function Home() {
    return (
        <main>
            about gang
            <FormattedMessage id="nav.about" />
        </main>

    )
}