/*

Recently gave online assesment for Booking.com could pass only 5 test cases out of 7.

Problem Statment:
Booking.com wants to recognize k performing hotels. These hotels are being identified by analyzing their user reviews and calculating a review score for each of the hotels.

To calculate the score they have:

A list of user reviews for each hotel
List of positive keywords
List of negative keywords
Positive keywords weigh 3 points each and negative keywords weigh -1 each.

For example, given the input below:

positive keywords: "breakfast beach city center location metro view staff price",

negative keywords: "not",

number of hotels: m = 5,

array of hotel ids: [1,2,1,1,2],

number of reviews: n=5,

array of reviews: [

"This hotel has a nice view of the city center. The location is perfect.",

"The breakfast is ok. Regarding location, it is quite far from city center but the price is cheap so it is worth.",

"Location is excellent, 5 minutes from the city center. There is also a metro station very close to the hotel.",

"They said I couldn’t take my dog and there were other guests with dogs! That is not fair.",

"Very friendly staff and a good cost-benefit ratio. Its location is a bit far from the city center."

],

number of hotels we want to award: k = 2,

then top k Hotels will be 2, 1.

Function Description:
The function must return a list of hotel ids sorted in descending order of their total score. Our function awardTopKHotels has the following parameter(s):

positiveKeywords: a space-separated string of positive keywords in review
negativeKeywords : a space separated string of negative keywords in review
hotelIds[hotelIds[0]…hotelIds[m-1]] : an array of integers, which represents hotel IDs
reviews[reviews[0]…reviews[n-1]] : An array of String, which represents reviews.
reviews[i] is review for hotelIds[i]. reviews and hotel ids are one-to-one mapped.
k : the number of hotels we want to award.
Constraints:
m is always equal to n.
If two hotels have the same score, they should be sorted in the output based on their ID, smallest ID first.
The keywords to find will always be single words like "breakfast" or "noise". Never double words like "swimming pool".
Matching should be case-insensitive.
Dots and commas should be ignored.
If a word appears in a review twice, it should count twice.
1 ≤ m ≤ 109 , 1 ≤ n ≤ 109 ,1 ≤ hotelIds[i] ≤ 105 , 1 ≤ k ≤ 109
In case one or more test cases time out, consider revisiting the runtime complexity of your algorithms.
If k is greater than the unique number of hotel ids, then list all the hotel ids
Input Format For Custom Testing:
Input from stdin will be processed as follows and passed to the function.

The first line contains a sentence with space-separated positive keywords.
The second line contains a sentence with space-separated negative keywords.
The third line contains an integer M, the size of the array hotels Ids.
The next M lines each contain an element hotelIds[i].
Next line contains an integer N, the size of the array reviews.
The next N lines each contain an element review [i]
The next line contains an integer K, number of hotels we want to award.

*/

// import {
//   PriorityQueue,
//   MinPriorityQueue,
//   MaxPriorityQueue,
//   ICompare,
//   IGetCompareValue,
// } from "@datastructures-js/priority-queue";
const MaxPriorityQueue =
  require("@datastructures-js/priority-queue").MaxPriorityQueue;
function topKHotel(
  hotelIdArr = [],
  reviewArr = [],
  size = 0,
  positiveWords = "",
  negativeWords = "",
  k = 1
) {
  const positiveSet = new Set();
  const negativeSet = new Set();
  const hotelMap = {};

  const POSITIVE_SCORE = 3;
  const NEGATIVE_SCORE = -1;
  positiveWords.split(" ").forEach((word) => {
    positiveSet.add(word);
  });
  negativeWords.split(" ").forEach((word) => {
    negativeSet.add(word);
  });
  // console.log("positiviv negative : ", { positiveSet, negativeSet });

  const getScore = (review = "") => {
    let score = 0;
    let reviewWords = review.split(" ");
    for (let w of reviewWords) {
      if (positiveSet.has(w)) score += POSITIVE_SCORE;
      if (negativeSet.has(w)) score -= NEGATIVE_SCORE;
    }
    return score;
  };

  for (let i = 0; i < reviewArr.length; i++) {
    const sc = getScore(reviewArr[i]);
    const hotelId = hotelIdArr[i];
    console.log({ hotelId, sc });
    let t = hotelMap[hotelId];
    if (t === undefined) {
      hotelMap[hotelId] = sc;
    } else {
      hotelMap[hotelId] = t + sc;
    }
  }
  console.log("positiviv negative : ", { hotelMap });
  const result = [];

  for (let i = 0; i < k; i++) {
    // const el = maxHeap.pop();
    // console.log(el);
    // result.push(el.element.id);
  }
  console.log(result);
  return result;
}
let pos = "breakfast beach city center location metro view staff price";
let neg = "not";
let hIds = [1, 2, 1, 1, 2, 3, 3];
let rev = [
  "This hotel has a nice view of the city center. The location is perfect.",
  "The breakfast is ok. Regarding location, it is quite far from city center but the price is cheap so it is worth.",
  "Location is excellent, 5 minutes from the city center. There is also a metro station very close to the hotel.",
  "They said I couldn’t take my dog and there were other guests with dogs! That is not fair.",
  "Very friendly staff and a good cost-benefit ratio. Its location is a bit far from the city center.",
  "The breakfast is ok. Regarding location, it is quite far from city.",
  "Location is excellent, 5 minutes from the city center",
];
topKHotel(hIds, rev, 5, pos, neg, 2);
