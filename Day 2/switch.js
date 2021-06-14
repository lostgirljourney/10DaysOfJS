"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getLetter(s) {
  let letter;
  // Write your code here

  switch (s[0]) {
    case "a":
      return "A";
      break;
    case "e":
      return "A";
      break;
    case "i":
      return "A";
      break;
    case "o":
      return "A";
      break;
    case "u":
      return "A";
      break;

    case "b":
      return "B";
      break;
    case "c":
      return "B";
      break;
    case "d":
      return "B";
      break;
    case "f":
      return "B";
      break;
    case "g":
      return "B";
      break;

    case "h":
      return "C";
      break;
    case "j":
      return "C";
      break;
    case "k":
      return "C";
      break;
    case "l":
      return "C";
      break;
    case "m":
      return "C";
      break;

    default:
      return "D";
      break;
  }

  return letter;
}
