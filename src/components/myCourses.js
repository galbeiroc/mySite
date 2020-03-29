import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Posts from "./posts"
import Card from "./card"

export default () => {
  const start= 'start'
  const enroll = 'enroll'

  const data = useStaticQuery(graphql`
    {
      dataJson {
        data {
          courses {
            title
            progress
          }
          email
          username
        }
      }
    }
  `)

  return (
    <section>
      <div className="mt-10">
        <div className="max-w-4xl mx-auto">
          <Posts
            data={data.dataJson.data.courses}
            card={Card}
            title="Mis courses iniciados"
            start={start}
          />

          <Posts
            data={data.dataJson.data.courses}
            card={Card}
            title="Mis courses sin iniciar"
            start={enroll}
          />
        </div>
      </div>
    </section>
  )
}
