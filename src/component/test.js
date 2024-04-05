import { useEffect } from "react";
function Test(){

  useEffect(() => {
    console.log('effect');
    return() => {
      console.log('unmount');
    }
  })
  return (
    <>
        TEST
    </>
  )
}
export default Test