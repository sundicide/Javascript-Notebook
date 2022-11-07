import {expectEqualTest} from "../utils";

test("교점에 별 만들기", () => {
    function solution(line) {
        var answer = [];

        function getVar(line) {
            return [line[0], line[1], line[2]]
        }

        function getCrossPos(_line1, _line2) {
            const [A, B, E] = getVar(_line1)
            const [C, D, F] = getVar(_line2)

            const bottom = A * D - B * C
            if (bottom === 0) return null
            const calcX = (B * F - E * D) / bottom
            const calcY = (E * C - A * F) / bottom
            if (Number.isInteger(calcX) && Number.isInteger(calcY)) return [calcX, calcY]
            else return null
        }

        const arr = []
        let maxX = Number.MIN_SAFE_INTEGER
        let minX = Number.MAX_SAFE_INTEGER
        let maxY = Number.MIN_SAFE_INTEGER
        let minY = Number.MAX_SAFE_INTEGER
        for (let i = 0; i < line.length - 1; i++) {
            for (let j = i + 1; j < line.length; j++) {
                const result = getCrossPos(line[i], line[j])
                if (result) {
                    const [x, y] = result
                    minX = Math.min(x, minX)
                    maxX = Math.max(x, maxX)
                    minY = Math.min(y, minY)
                    maxY = Math.max(y, maxY)
                    arr.push(result)
                }
            }
        }
        // console.log(minX, maxX, minY, maxY, arr)
        if (minX === 0 && minY === 0 && maxX === 0 && maxY === 0) return ["*"]

        const resultArr = Array.from(Array(maxY - minY + 1), () => Array(maxX - minX + 1).fill('.'))
        // console.log(resultArr)
        arr.forEach(([x, y]) => {
            // let tempX = Math.abs(maxX - x) - (minX === 0 || maxX === 0 ? 1 : 0)
            // let tempY = Math.abs(minY - y) - (minY === 0 || maxY === 0 ? 1 : 0)
            // console.log(x, y, tempX, tempY)
            resultArr[maxY - y][x - minX] = '*'
        })
        return resultArr.map(d => d.join('')).flat()
    }
    const case1 = [[[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]],	["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"]]
    expectEqualTest(solution(case1[0]), case1[1])

    const case2 = [[[0, 1, -1], [1, 0, -1], [1, 0, 1]], ["*.*"]]
    expectEqualTest(solution(case2[0]), case2[1])

    const case3 = [[[1, -1, 0], [2, -1, 0]], ["*"]]
    expectEqualTest(solution(case3[0]), case3[1])

    const case4 = [[[1, -1, 0], [2, -1, 0], [4, -1, 0]], ["*"]]
    expectEqualTest(solution(case4[0]), case4[1])
})