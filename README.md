# Random Wikis
Get a random list of wikipedia articles including their titles and urls in the form of an array returned as a promise.

![](https://img.shields.io/npm/v/request-promise?color=ff00ff&label=request-promise&style=for-the-badge)
![](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/7300af41b2f64171a587251b8d8d09ad)](https://www.codacy.com/manual/PvtTyphoon/randomwikis?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=PvtTyphoon/randomwikis&amp;utm_campaign=Badge_Grade)

## Example Usage
---
```
const randomwikis = require("randomwikis");
(async() => (
// use async to await promise
  let pages = await randomwikis(69); // Returns 10 articles by default
  console.log(pages);
})();
```
This package can only return 500 random articles since spamming the wikimedia API is a dick move, if you must do it yourself with for loops.
Defaults to 10 articles.
---
