function FoodDistribution(arr) {
  console.log('input:', arr.toString())

  let nSandwiches = arr.shift()

  let media = 0;

  arr.forEach((e) => {
    media += e;
  })

  media /= arr.length

  media = Math.floor(media)

  // console.log('media', media)

  while (nSandwiches > 0) {
    let maxHunger = getMaxHunger(arr)
    // console.log(hungerV.minHunger, hungerV.maxHunger)

    if (maxHunger - media - nSandwiches >= 0) {
      arr[arr.indexOf(maxHunger)] = media
      nSandwiches -= maxHunger - media
      // console.log(arr)
      // console.log(nSandwiches)
    } else if (maxHunger - media - nSandwiches < 0) {
      let count = 0
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maxHunger) {
          count++
        }
      }
      if (count > nSandwiches) {
        break;
      }
      // console.log('count:', count)
      if (count <= nSandwiches && count > 0 && nSandwiches > 0) {
        while (count > 0) {
          arr[arr.indexOf(maxHunger)]--
          nSandwiches--
          count--
          // console.log(count)
        }
      }
    }
  }

  // console.log('Fin:', arr, 'Sandwiches:', nSandwiches)
  console.log('Output:', getDifference(arr))
  // code goes here
  return arr;
}

function getMaxHunger(arr) {
  let maxHunger = 0;
  let minHunger = 5;

  arr.forEach((element) => {
    if (element > maxHunger) {
      maxHunger = element
    }
    if (element < minHunger) {
      minHunger = element
    }
  })
  return maxHunger
}

function getDifference(arr) {
  let difference = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    difference += Math.abs(arr[i] - arr[i + 1])
  }
  return difference
}
