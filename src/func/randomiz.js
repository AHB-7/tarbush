// // utils.js
// export function getRandomPosition(maxWidth, maxHeight, imageWidth, imageHeight, existingPositions) {
//     let position;
//     let overlapping;

//     do {
//         overlapping = false;
//         position = {
//             x: Math.random() * (maxWidth - imageWidth),
//             y: Math.random() * (maxHeight - imageHeight),
//         };

//         for (let i = 0; i < existingPositions.length; i++) {
//             const existingPosition = existingPositions[i];
//             if (
//                 position.x < existingPosition.x + imageWidth &&
//                 position.x + imageWidth > existingPosition.x &&
//                 position.y < existingPosition.y + imageHeight &&
//                 position.y + imageHeight > existingPosition.y
//             ) {
//                 overlapping = true;
//                 break;
//             }
//         }
//     } while (overlapping);

//     return position;
// }
