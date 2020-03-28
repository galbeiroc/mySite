import React, { Fragment } from "react"

export default props => (
  <Fragment>
    <h4 className="text-3xl font-bold text-center mt-8">{props.title}</h4>
    <div className="flex mt-8">
      {props.data.map(el => {
        if (el.progress > 0 && props.start === true) {
          return (<props.card element={el}/>)
        } else if (el.progress === "0.0" && props.start === false){
          return (<props.card element={el}/>)
        }else {
          return (<props.card element={el}/>)
        }
      })}
    </div>
  </Fragment>
)
