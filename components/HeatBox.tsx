import React from 'react'

function HeatBox({score}:{score:number}) {
    let color = "bg-white"
    if (score == 1) {
      color = "bg-yellow-50";
    } else if (score == 2) {
      color = "bg-green-300";
    } else if (score == 3) {
      color = "bg-green-600";
    } else if (score == 4) {
      color = "bg-green-950";
    }
  return <div className={`h-8 w-10 m-1 ${color}`}></div>;
}

export default HeatBox