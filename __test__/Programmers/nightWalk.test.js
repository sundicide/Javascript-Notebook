import {LOG, expectEqualTest as eET} from "../utils";

// https://school.programmers.co.kr/learn/courses/30/lessons/133501
test("야간 전술보행", () => {
    function solution(distance, scope, times) {
        let min = Number.MAX_SAFE_INTEGER
        for (let i = 0; i < scope.length; i++) {
            const [startScope, endScope] = scope[i].sort()
            const [startTime, endTime] = times[i]
            const timeSum = startTime + endTime;

            let time = startScope
            while (time <= endScope) {
                const calc = (time - 1) % timeSum
                if (calc >= 0 && calc < startTime) {
                    min = Math.min(min, time)
                    break
                }
                time++
            }
        }
        if (min === Number.MAX_SAFE_INTEGER) return distance
        else return min
    }

    const case1 = [10, [[3, 4], [5, 8]], [[2, 5], [4, 3]]]
    const result1 = solution(case1[0], case1[1], case1[2])
    eET(result1, 8)
    const case2 = [12, [[7, 8], [4, 6], [11, 10]], [[2, 2], [2, 4], [3, 3]]]
    const result2 = solution(case2[0], case2[1], case2[2])
    eET(result2, 12)
});
