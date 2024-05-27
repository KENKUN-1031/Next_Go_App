import { useEffect, useState } from 'react'


export const useUser = () => {
  //変数の準備？
  const [count,setCount]= useState<number>(0)

  //plusが押された時
  const handleIncremment = ()=>{
    setCount((prevState)=>prevState+1);
  }
  //minusが押された時
  const handleMinus = ()=>{
    setCount(prevState => prevState-1);
  }

  return {handleIncremment, handleMinus, count}
}
