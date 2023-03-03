/**
 * Implement the Queue class with the following methods:
 *     size()     - returns the size of the queue (number of items in it)
 *     add(item)  - adds an item to the queue
 *     get()      - returns the oldest item from the queue and removes it, returns null if there are no items
 *
 *
 * Usage example:
 * ```
 * const queue = new Queue();
 *
 * queue.add('item1');
 * queue.add('item2');
 *
 * console.log(queue.size()); // 2
 *
 * console.log(queue.get()); // item1
 * console.log(queue.get()); // item2
 *
 * console.log(queue.size()); // 0
 * ```
 */

class Queue {
  constructor () {
    this.items = []
  }

  size () {
    return this.items.length
  }

  add (item) {
    this.items.push(item)
  }

  get () {
    if (this.items.length === 0) {
      return null
    } else {
      return this.items.shift()
    }
  }
}

module.exports = Queue
