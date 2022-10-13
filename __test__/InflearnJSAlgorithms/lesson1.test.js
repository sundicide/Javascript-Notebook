import { LOG, expectEqualTest } from "../utils";

// 세 수 중 최솟값

function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));

// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
test("number 02", () => {
  function solution2(a, b, c) {
    const max = Math.max(...[a, b, c]);
    return a + b + c - max > max;
  }
  expectEqualTest(solution2(6, 7, 11), true);
  expectEqualTest(solution2(13, 33, 17), false);
});

// 연필 개수
test("problem 03", () => {
  function solution3(n) {
    return Math.ceil(n / 12);
  }
  expectEqualTest(solution3(25), 3);
  expectEqualTest(solution3(178), 15);
});

// 4. 1~N 까지 합
test("problem 04", () => {
  function solution(n) {
    return (n * (n + 1)) / 2;
  }
  expectEqualTest(solution(6), 21);
  expectEqualTest(solution(10), 55);
});

// 7. 10부제
test("problem 07", () => {
  function solution(day, carNumbers) {
    return carNumbers.filter((carNumber) => String(carNumber).includes(day))
      .length;
  }
  expectEqualTest(solution(3, [25, 23, 11, 47, 53, 17, 33]), 3);
  expectEqualTest(solution(0, [12, 20, 54, 30, 87, 91, 30]), 3);
  // expectEqualTest(solution(10), 55);
});

// 8. 일곱 난쟁이
test("problem 08", () => {
  function solution(membersString) {
    var members = membersString.split(" ").map((d) => parseInt(d, 10));
    const sum = members.reduce((accu, curr) => accu + curr, 0);
    const len = members.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (sum - members[i] - members[j] === 100) {
          return members.filter((_, idx) => idx !== i && idx !== j);
        }
      }
    }
  }
  expectEqualTest(solution("20 7 23 19 10 15 25 8 13"), [
    20,
    7,
    23,
    19,
    10,
    8,
    13
  ]);
});

// 9. A를 #으로
test("problem 09", () => {
  function solution(paramString) {
    return paramString.replace(/A/g, "#");
  }
  expectEqualTest(solution("BABABABABABA"), "B#B#B#B#B#B#");
});

// 11. 알파벳 대문자 갯수 찾기
test("problem 11", () => {
  function solution(paramString) {
    return paramString.split("").filter((d) => d.match(/[A-Z]/g)).length;
  }
  expectEqualTest(solution("KoreaTimeGood"), 3);
});

// 17. 중복단어 제거
test("problem 17", () => {
  function solution(paramString) {
    const words = paramString.split(" ");
    return words.filter((d, i) => {
      return words.indexOf(d) === i;
    });
  }
  expectEqualTest(solution("good time good time student"), [
    "good",
    "time",
    "student"
  ]);
});
