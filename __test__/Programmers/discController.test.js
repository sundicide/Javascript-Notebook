import {expectEqualTest} from "../utils";

// https://school.programmers.co.kr/learn/courses/30/lessons/42627
test("disk controller", () => {
    function solution(jobs) {
        jobs.sort((a, b) => a[0] - b[0])

        let sum = 0
        let prevEnd = 0

        let i = 0
        const queue = []
        while(i < jobs.length || queue.length > 0) {
            if (i < jobs.length && prevEnd >= jobs[i][0]) {
                queue.push(jobs[i++])
                continue
            }
            queue.sort((a, b) => {
                return (a[1]) - (b[1])
            })
            if (queue.length > 0) {
                const [startQ, endQ] = queue.shift()
                prevEnd += endQ
                sum += prevEnd - startQ
            } else {
                prevEnd = jobs[i][0]
            }

        }
        return Math.floor(sum / jobs.length)
    }
    const result = solution([[0, 3], [1, 9], [2, 6]])
    expectEqualTest(result, 9)
})