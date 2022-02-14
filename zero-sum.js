let nums = [-1,0,1,2,-1,-4,4]

function zeroSum(n){
  
  let result = []
  for (var i = 0; i < n.length; i++) {
    if (n.includes(-(n[i]+n[i+1]))) {
      result.push([n[i], n[i+1], -(n[i]+n[i+1])])
    }
  }
  
  return result
}

console.log("--->",zeroSum(nums))
