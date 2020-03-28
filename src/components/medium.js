import React, { useState, useEffect } from "react"
import Posts from "./posts"
import MediumPost from "./mediumPost"

export default () => {
  const [posts, setPost] = useState([])
  useEffect(() => {
    async function getMediumPost() {
      let mysRepos
      const data = sessionStorage.getItem("posts")
      if (data) {
        mysRepos = JSON.parse(data)
        setPost(mysRepos)
      }
      const endpoint =
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz"
      mysRepos = await fetch(endpoint).then(r => r.json())

      sessionStorage.setItem("posts", JSON.stringify(mysRepos.items))

      setPost(mysRepos.items)
    }

    getMediumPost()
    console.log(posts)
  }, [])
  return (
    <div className="max-w-4xl m-auto overflow-x-scroll">
      <Posts
        data={posts}
        card={MediumPost}
        title={"Mis publicaiones en Medium"}
      />
    </div>
  )
}
