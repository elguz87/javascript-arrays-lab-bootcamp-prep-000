const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
}
