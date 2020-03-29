import React, { useState, useEffect } from "react"
import Posts from "./posts"
import MediumPost from "./mediumPost"

export default () => {
  const [posts, setPost] = useState([])
  const myPost = 'post'
  useEffect(() => {
    async function getMediumPost() {
      let mysPost
      const data = sessionStorage.getItem("posts")
      if (data) {
        mysPost = JSON.parse(data)
        setPost(mysPost)
      }
      const endpoint =
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz"
        mysPost = await fetch(endpoint).then(r => r.json())

      sessionStorage.setItem("posts", JSON.stringify(mysPost.items))

      setPost(mysPost.items)
    }

    getMediumPost()

  }, [])
  return (
    <div className="max-w-4xl m-auto overflow-x-scroll">
      <Posts
        data={posts}
        card={MediumPost}
        title={"Mis publicaiones en Medium"}
        start={myPost}
      />
    </div>
  )
}
