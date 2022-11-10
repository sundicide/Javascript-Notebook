import {expectEqualTest} from "../utils";

// https://school.programmers.co.kr/learn/courses/30/lessons/42842
test("카펫", () => {
    function solution(brown, yellow) {
        var answer = [];
        function formula(yellow) {
            for (let horizontal = 1, s = Math.sqrt(yellow); horizontal <= s; horizontal++) {
                const vertical = yellow / horizontal
                if (!Number.isInteger(vertical)) continue
                const calcResult = (horizontal + 2) * 2  + (vertical * 2)
                if (calcResult !== brown) continue
                answer.push(Math.max(vertical, horizontal) + 2)
                answer.push(Math.min(vertical, horizontal) + 2)
                break
            }
        }
        formula(yellow)

        return answer;
    }

    expectEqualTest(solution(10, 2), [4,3])
    expectEqualTest(solution(8, 1), [3,3])
    expectEqualTest(solution(24, 24), [8,6])
})