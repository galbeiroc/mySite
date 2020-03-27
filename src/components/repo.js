import React from "react"

export default ({ repo }) => (
  <li className="flex items-center">
    <div className="w-10/12 overflow-x-hidden">
      <h4 className="text-blue-500 font-bold truncate">{repo.name}</h4>
      <p
        className="text-sm text-gray-700 overflow-y-hidden"
        style={{ height: "1.5em" }}
      >
        {repo.description}
      </p>
    </div>
    <div className="flex-1">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        Ver
      </a>
    </div>
  </li>
)
