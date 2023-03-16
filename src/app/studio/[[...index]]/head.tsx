import { NextStudioHead } from "next-sanity/studio/head";

export default function CustomStudioHead() {
  return (
    <>
      <NextStudioHead favicons={false} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
    </>
  )
}
