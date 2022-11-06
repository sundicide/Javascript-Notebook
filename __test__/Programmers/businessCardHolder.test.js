import {expectEqualTest} from "../utils";

test("명함지갑 카드 크기", () => {
    function solution(sizes) {
        var answer = 0;
        const firsts = []
        const seconds = []
        let max = [0, 0, 0];
        for (let i = 0; i < sizes.length; i++) {
            const [first, second] = sizes[i]
            firsts.push(first)
            seconds.push(second)
            const newMax = Math.max(first, second, max[2])
            if (newMax !== max[2]) {
                max = [i, first === newMax ? 1 : 0, newMax]
            }
        }

        let newMax = 0
        for (let i = 0; i < sizes.length; i++) {
            if (i === max[0]) {
                newMax = Math.max(newMax, sizes[i][max[1]])
            } else {
                const [first, second] = sizes[i]
                newMax = Math.max(newMax, Math.min(first, second))
            }
        }
        return max[2] * newMax;
    }

    const case1 = [[[60, 50], [30, 70], [60, 30], [80, 40]], 4000]
    const case2 = [[[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]], 120]
    const case3 = [[[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]], 133]
    expectEqualTest(solution(case1[0]), case1[1])
    expectEqualTest(solution(case2[0]), case2[1])
    expectEqualTest(solution(case3[0]), case3[1])
})