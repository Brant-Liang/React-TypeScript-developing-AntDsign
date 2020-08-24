import React from 'react'

interface IHelloProps {
  message: string;
}
function Hello(props: IHelloProps) {
  return (
    <div>
      {props.message}
    </div>
  )
}

export default Hello

