let lastTime = 0
let time = 0
let total = 0
let keys = 0

export function speedCounter () {
  let speed=0
    time = new Date().getTime()
    if (lastTime !== 0) {
      keys++
      total += time - lastTime
      speed=Math.round(keys / (total / 1000 / 60))
    }
    lastTime = time
    return speed
    }
