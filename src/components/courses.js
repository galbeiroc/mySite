import React from "react"
import { useStaticQuery, graphql, grap } from "gatsby"
import Post from "./post"

export default () => {
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
  console.log(data)

  return (
    <section>
      <div className="mt-20">
        <div className="max-w-4xl mx-auto">
          <Post data={data.dataJson.data.courses} title='Mis courses iniciados'/>

          <h4 className="text-3xl font-bold text-center">
            Mis courses sin iniciar
          </h4>
          <div className="flex mt-8">
            {data.dataJson.data.courses.map(course => {
              if (course.progress == 0) {
                return (
                  <div className="shadow p-8 bg-white mr-4 rounded">
                    <h4 className="font-bold">{course.title}</h4>
                    <div className="text-center">
                      <span className="inline-block bg-purple-200 text-purple-800 p-2 mt-2 radius">
                        Progress: {course.progress}%
                      </span>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
