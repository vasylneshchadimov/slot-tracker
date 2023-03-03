/**
 * You are working in a casino and are tasked with developing a classic slot game machine.
 *
 * Considering a slot machine with three rows and three vertical reels defined like this:
 * Reel1: ['cherry', 'lemon', 'apple',  'lemon', 'banana', 'banana', 'lemon', 'lemon']
 * Reel2: ['lemon', 'apple',  'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon']
 * Reel3: ['lemon', 'apple',  'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']
 *
 * Using these reels, complete the calculateResult function so that, when it's called, it gives back the result of a spin.
 * The calculateResult function takes 3 arguments, each specifying a stopping position for the corresponding reel.
 * The stopping positions describe the array index of the first symbol shown in each column. Since the machine shows
 * three rows of each reel, given a stopping position i, the reel will show symbols i, i+1, and i+2.
 *
 * 3 Cherries in a row: won 50 coins
 * 2 Cherries in a row: won 40 coins
 * 3 Apples in a row: won 20 coins
 * 2 Apples in a row: won 10 coins
 * 3 Bananas in a row: won 15 coins
 * 2 Bananas in a row: won 5 coins
 * 3 Lemons in a row: won 3 coins
 *
 *
 *   Example:
 *    Given the stopping positions (0, 2, 7), the slot machine would look like this:
 *
 *       Reel1      Reel2     Reel3
 *    --------------------------------
 *    |  cherry  |  lemon  |  lemon  |
 *    |  lemon   |  lemon  |  lemon  |
 *    |  apple   |  cherry |  apple  |
 *    --------------------------------
 *
 *   The machine shows three lemons in the second row (gives 3 coins) and two apples in the third row (gives 10 coins).
 *   Therefore the total win amount is 13.
 *
 */

function calculateResult (position1, position2, position3) {
  // write your code here
  // return total win (coins)
  const reels = {
    Reel1: ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'],
    Reel2: ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'],
    Reel3: ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']
  }

  if (position1 > reels.Reel1.length - 1 || position2 > reels.Reel2.length - 1 || position3 > reels.Reel3.length - 1) { return }

  const positions = [...arguments]

  function countIndex (position) {
    if (position === reels.Reel1.length - 1) {
      return 0
    } else {
      position++
      return position
    }
  }
  function countfrutsLines () {
    const fruitsLinesSceleton = {
      first: [],
      second: [],
      third: []
    }

    const reelsKeys = Object.keys(reels)

    positions.forEach((position, i) => {
      let index = position
      for (const key in fruitsLinesSceleton) {
        fruitsLinesSceleton[key].push(reels[reelsKeys[i]][index])
        index = countIndex(index)
      }
    })

    return fruitsLinesSceleton
  }
  const SLOT_RULES = {
    CHERRY: {
      NAME: 'cherry',
      COINS_FOR_THREE: 50,
      COINS_FOR_TWO: 40
    },
    APPLE: {
      NAME: 'apple',
      COINS_FOR_THREE: 20,
      COINS_FOR_TWO: 10
    },
    BANANA: {
      NAME: 'banana',
      COINS_FOR_THREE: 15,
      COINS_FOR_TWO: 5
    },
    LEMON: {
      NAME: 'lemon',
      COINS_FOR_THREE: 3

    }
  }
  function countCoins (fruitCount) {
    if (fruitCount[SLOT_RULES.CHERRY.NAME] === 3) {
      return SLOT_RULES.CHERRY.COINS_FOR_THREE
    } else if (fruitCount[SLOT_RULES.CHERRY.NAME] === 2) {
      return SLOT_RULES.CHERRY.COINS_FOR_TWO
    }

    if (fruitCount[SLOT_RULES.APPLE.NAME] === 3) {
      return SLOT_RULES.APPLE.COINS_FOR_THREE
    } else if (fruitCount[SLOT_RULES.APPLE.NAME] === 2) {
      return SLOT_RULES.APPLE.COINS_FOR_TWO
    }

    if (fruitCount[SLOT_RULES.BANANA.NAME] === 3) {
      return SLOT_RULES.BANANA.COINS_FOR_THREE
    } else if (fruitCount[SLOT_RULES.BANANA.NAME] === 2) {
      return SLOT_RULES.BANANA.COINS_FOR_TWO
    }

    if (fruitCount[SLOT_RULES.LEMON.NAME] === 3) {
      return SLOT_RULES.LEMON.COINS_FOR_THREE
    }
  }
  const fruitsLines = countfrutsLines()

  const fruitsCountArray = []
  for (const key in fruitsLines) {
    const counts = {}
    fruitsLines[key].forEach(frut => {
      if (!counts[frut]) {
        counts[frut] = 0
      }
      counts[frut]++
    })
    fruitsCountArray.push(counts)
  }

  return fruitsCountArray.reduce((acc, fruitCountObject) => {
    const coins = countCoins(fruitCountObject) || 0
    return acc + coins
  }, 0)
}

module.exports = calculateResult
