import {expectEqualTest} from "../utils";

// https://school.programmers.co.kr/learn/courses/30/lessons/12980
test("점프와 순간이동", () => {
    function solution(n) {
        var ans = 0;

        while (n > 0) {
            if (n % 2 === 0) {
                n /= 2
            }  else {
                n -= 1
                ans++
            }
        }

        return ans;
    }

    expectEqualTest(solution(5), 2)
    expectEqualTest(solution(6), 2)
    expectEqualTest(solution(5000), 5)
})