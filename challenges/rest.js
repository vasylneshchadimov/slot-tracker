const fetch = require('node-fetch')

/**
 * Implement the loadPosts() function that returns a Promise with posts
 * loaded from https://jsonplaceholder.typicode.com/posts and alphabetically sorted by title
 *
 *
 * Usage example:
 * ```
 * loadPosts().then(posts => {
 *      console.log(posts); // [{ title: ... } ...]
 * });
 * ```
 */

function loadPosts () {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>
      posts.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      }
      )
    )
}

module.exports = loadPosts
