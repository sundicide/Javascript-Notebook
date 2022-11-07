import {expectEqualTest} from "../utils";

test("교점에 별 만들기", () => {
    function solution(line) {
        var answer = [];

        function getVar(line) {
            return {
                x: line[0],
                y: line[1],
                d: line[2]
            }
        }

        function getCrossPos(_line1, _line2) {
            const line1 = getVar(_line1)
            const line2 = getVar(_line2)
            const A = line1.x
            const B = line1.y
            const E = line1.d
            const C = line2.x
            const D = line2.y
            const F = line2.d

            const bottom = A * D - B * C
            if (bottom === 0) return null
            const calcX = (B * F - E * D) / bottom
            const calcY = (E * C - A * F) / bottom
            if (Math.ceil(calcX) !== calcX || Math.ceil(calcY) !== calcY) return null
            return [calcX, calcY]
        }

        const arr = []
        let minX = 0
        let maxX = 0
        let minY = 0
        let maxY = 0
        for (let i = 0; i < line.length - 1; i++) {
            for (let j = i + 1; j < line.length; j++) {
                const result = getCrossPos(line[i], line[j])
                if (result) {
                    const [x, y] = result
                    if (x < minX) minX = x
                    else if (x > maxX) maxX = x
                    if (y < minY) minY = y
                    else if (y > maxY) maxY = y
                    arr.push(result)
                }
            }
        }
        // console.log(minX, maxX, minY, maxY, arr)
        if (minX === 0 && minY === 0 && maxX === 0 && maxY === 0) return ["*"]

        const resultArr = Array.from(Array(Math.abs(minY) + Math.abs(maxY) + (minY !== 0 && maxY !== 0 ? 1 : 0)), () => Array(Math.abs(minX) + Math.abs(maxX) + (minX !== 0 && maxX !== 0 ? 1 : 0)).fill('.'))
        // console.log(resultArr)
        arr.forEach(([x, y]) => {
            let tempX = Math.abs(maxX - x) - (minX === 0 || maxX === 0 ? 1 : 0)
            let tempY = Math.abs(minY - y) - (minY === 0 || maxY === 0 ? 1 : 0)
            // console.log(x, y, tempX, tempY)
            resultArr[tempY][tempX] = '*'
        })
        console.log("zzzzz", resultArr.length, resultArr[0].length, minX, maxX, minY, maxY)
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