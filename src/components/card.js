import React from "react"

export default ({ element }) => (
  <div className="shadow p-8 bg-white mr-4 rounded">
    <a
      href={element.url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold"
    >
      {element.title}
    </a>
    <div className="text-center">
      <span className="inline-block bg-purple-200 text-purple-800 p-2 mt-2 radius">
        Progress: {element.progress}%
      </span>
    </div>
  </div>
)
