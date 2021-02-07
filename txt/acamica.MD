terminal
pwd
mkdir
ls - dir
cd
mv
copy
rm - rmdir, del
clear - cls

git
repository
revision( cada commit)
commit
local copy
staging

git init
git status
git diff
git checkout
git add
git commit (--amend)
git log (--oneline)(-p) (-- index.html)
git branch (-d)
git fetch
git merge
git pull (fetch and merge)
git remote add (remove rm) origin

### variables

- inicialización (var i = 10)
- asignación destructiva (i = 20)
- actualización (i = i + 1)

### control de fujo

- flujo secuencial
- flujo condicional (and, or, xor, not)
- flujo iterativo (for, while, do while)

## Objects

Pueden tener attributos y funciones

- new Object()
- {}



## Imperativa

- estructural
- Procedimental
- OOP
- otros

### Declaratividad
Separar la descripción de la solución del problema a (el qué), de los detalles de la misma y el conocimiento del dominio (el cómo)

## Declarativa

- funcional
- logica
- otros

### Paradigma Imperativo
```javascript
var POSITIVE_SENTIMENT = 'positive'
var NEGATIVE_SENTIMENT = 'negative'
var NEUTRAL_SENTIMENT = 'neutral'

var reviews = [
  {sentiment: POSITIVE_SENTIMENT, text: 'Lorem Ipsum'},
  {sentiment: POSITIVE_SENTIMENT, text: 'Foo'},
  {sentiment: NEGATIVE_SENTIMENT, text: 'Baz'}
]

var stats = {positiveCount: 0, negativeCount: 0, neutralCount: 0}

reviews.forEach(function (it) {
  if (it.sentiment === POSITIVE_SENTIMENT) {
    stats.positiveCount += 1
  } else if (it.sentiment === NEUTRAL_SENTIMENT) {
    stats.neutralCount += 1
  } else {
    stats.negativeCount += 1
  }
});
```

### Paradigma OOP
```javascript
function Review(sentiment, text) {
  this.sentiment = sentiment;
  this.text = text;
}

Review.prototype = {
  collectStats: function (stats) {
    this.sentiment.collectStats(stats);
  }
}

// == EL CÓMO ==
var POSITIVE_SENTIMENT = {
  collectStats: function (stats) { stats.positiveCount += 1 }
}
var NEGATIVE_SENTIMENT = {
  collectStats: function (stats) { stats.negativeCount += 1 }
}
var NEUTRAL_SENTIMENT = {
  collectStats: function (stats) { stats.neutralCount += 1 }
}

var reviews = [
  new Review(POSITIVE_SENTIMENT, 'Lorem Ipsum'),
  new Review(POSITIVE_SENTIMENT, 'Foo'),
  new Review(NEGATIVE_SENTIMENT, 'baz')
]

function Stats() {
  this.positiveCount = 0;
  this.negativeCount = 0;
  this.neutralCount = 0;
}

var stats = new Stats()

// == EL QUÉ ==
reviews.forEach(function (it) {
  it.collectStats(stats);
});
```

### Paradigma Funcional
```javascript

function isEmpty(xs) {
  return xs.length === 0;
}
function head(xs) {
  return xs[0]
}
function tail(xs) {
  return xs.slice(1)
}
function toObject(array) {
  var result = {} 
  array.forEach(function (it) {
    result[it[0]] = it[1]
  });
  return result;
}
//...etc...
Object.prototype.tap = function(f){
  return f(this);
}
function equalBy(f) {
  return function (x, y) {
    return f(x) === f(y)
  }
}
Array.prototype.groupBy = function(f) {
  return this.group(equalBy(f))
}
//...etc...

var POSITIVE_SENTIMENT = 'positive';
var NEGATIVE_SENTIMENT = 'negative';
var NEUTRAL_SENTIMENT = 'neutral';

var reviews = [
  {sentiment: POSITIVE_SENTIMENT, text: 'Lorem Ipsum'},
  {sentiment: POSITIVE_SENTIMENT, text: 'Foo'},
  {sentiment: NEGATIVE_SENTIMENT}
]

reviews.
    groupBy(function (it) {
      return it.sentiment
    }).
    map(function (it) {
      return [it[0].sentiment, it.length]
    }).
    tap(toObject).
    tap(function (it) {
      return {
        positiveCount: it[POSITIVE_SENTIMENT] || 0,
        negativeCount: it[NEGATIVE_SENTIMENT] || 0,
        neutralCount: it[NEUTRAL_SENTIMENT]   || 0}
    });
```

```javascript
```

```javascript
```