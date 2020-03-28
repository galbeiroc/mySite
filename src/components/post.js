import React, { Fragment } from 'react';

export default ({title, data}) => (
    <Fragment>
        <h4 className="text-3xl font-bold text-center">
            {title}
          </h4>
          <div className="flex mt-8">
            {data.map(course => {
              if (course.progress > 0) {
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
    </Fragment>
)