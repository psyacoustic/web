var map1 = new Map();
map1.set('So Sweet Groats', 'grecha')
  .set('Gold Papers inc.', 'tualetka')
  .set('Shiny Sugar', 'pesok');


var map2 = new Map();
map2.set(3100, 'So Sweet Groats')
  .set(900, 'Gold Papers inc.')
  .set(2500, 'Shiny Sugar');


var map3 = new Map();
map3.set(30, 'So Sweet Groats')
  .set(14, 'Gold Papers inc.')
  .set(22, 'Shiny Sugar');


var a = 0;
var c = 0;
var minPrice, maxPrice, minTime, maxTime;
var nameMinPrice, nameMaxPrice, nameMinTime, nameMaxTime;

for (key of map2.keys()) {
  if (a === 0) {
    a += 1;
    minPrice = key;
    maxPrice = key;
    nameMinPrice = map2.get(key);
    nameMaxPrice = map2.get(key);
  } else {
    if (maxPrice < key) {
      maxPrice = key;
      nameMaxPrice = map2.get(key);
    } else if (minPrice > key) {
      minPrice = key;
      nameMinPrice = map2.get(key);
    }
  }
}

for (key of map3.keys()) {
  if (c === 0) {
    c += 1;
    minTime = key;
    maxTime = key;
    nameMinTime = map3.get(key);
    nameMaxTime = map3.get(key);
  } else {
    if (maxTime < key) {
      maxTime = key;
      nameMaxTime = map3.get(key);
    } else if (minTime > key) {
      minTime = key;
      nameMinTime = map3.get(key);
    }
  }
}

obj = {};
var date;

for (valDate of map3.values()) {
  for (keyDate of map3.keys()) {

    if (valDate === nameMinPrice) {
      if (map3.get(keyDate) === valDate)
        date = keyDate;
      obj[map1.get(nameMinPrice)] = {
        minPrice,
        nameMinPrice,
        date
      }
    }
  }
}

for (valDate of map3.values()) {
  for (keyDate of map3.keys()) {

    if (keyDate === minTime) {
      if (map3.get(keyDate) === valDate)
        date = keyDate;
      for (pri of map2.keys()) {
        if (map2.get(pri) === nameMinTime) {
          var price = pri
        }
      }
      obj[map1.get(nameMinTime)] = {
        price,
        nameMinTime,
        date
      }
    }
  }
}

for (valDate of map3.values()) {
  for (keyDate of map3.keys()) {

    if (valDate === nameMaxPrice) {
      if (map3.get(keyDate) === valDate)
        date = keyDate;
      obj[map1.get(nameMaxPrice)] = {
        maxPrice,
        nameMaxPrice,
        date
      }
    }
  }
}

for (valDate of map3.values()) {
  for (keyDate of map3.keys()) {

    if (keyDate === maxTime) {
      if (map3.get(keyDate) === valDate)
        date = keyDate;
      for (pri of map2.keys()) {
        if (map2.get(pri) === nameMaxTime) {
          price = pri
        }
      }
      obj[map1.get(nameMaxTime)] = {
        price,
        nameMaxTime,
        date
      }
    }
  }
}

console.log(obj);
