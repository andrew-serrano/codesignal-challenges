
function processorThatCould(playerOp, browserOp, k) {
  console.log(
    playerOp + (k * 2) + (browserOp - playerOp)
  )
  return playerOp > browserOp ? playerOp % k === 0 ? browserOp < k ? playerOp : playerOp + browserOp : 1 : false
}

console.log(
  processorThatCould(10,4,3),//5
  // processorThatCould(5,4,5),//5
  // processorThatCould(4,5,1), //7
  // processorThatCould(10,4,2)//14
  // processorThatCould(17,25,7)//31
)