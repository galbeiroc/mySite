import React, { Fragment } from "react"

export default props => (
  <Fragment>
    <h4 className="text-3xl font-bold text-center mt-8">{props.title}</h4>
    <div className="flex mt-8">
      {props.data.map(el => {
        if (Number(el.progress) > 0 && props.start === 'start') {
          return <props.card element={el} />
        } else if (Number(el.progress) === 0 && props.start === 'enroll') {
          return <props.card element={el} />
        }else if(props.start === 'post') {
          return <props.card element={el} />
        }
      })}
    </div>
  </Fragment>
)
