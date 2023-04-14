"use strict";

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1.

// console.log(gameEvents.values());

// const events = [new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.

// console.log(`An event happened, on
// average, every ${90/gameEvents.size} minutes`);

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(`An event happened, on
// average, every ${time/gameEvents.size} minutes`);

// // 4.

// for(const [min, event] of gameEvents) {
//    const half = min <= 45 ? 'First' : 'Second';
//    console.log(`[${half} Half] ${min}: ${event}`);
// }

// 1.
const events = [new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);

// 4.
for(const [mins, events] of gameEvents) {
    const half = mins <= 45 ?'First' : 'Second'
    console.log(`${half} half ${events}`);
}