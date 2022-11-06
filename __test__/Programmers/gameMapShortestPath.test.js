import {LOG, expectEqualTest as eET} from "../utils";

// https://school.programmers.co.kr/learn/courses/30/lessons/1844
// 22-11-03
test("게임 맵 최단거리", () => {
    function solution(maps) {
        const n = maps.length
        const m = maps[0].length

        let move = -1


        let queue = [[0, 0, 1]]

        const dr = [-1, 1, 0, 0]
        const dc = [0, 0, 1, -1]

        while (queue.length !== 0) {
            const pos = queue.pop()


            if (pos[0] === n - 1 && pos[1] === m - 1) {
                move = pos[2]
                break
            }

            for (let i = 0; i < 4; i++) {
                const row = pos[0] + dr[i]
                const col = pos[1] + dc[i]


                if (row < 0 || col < 0 || row >= n || col >= m || maps[row][col] === 0)
                    continue

                queue.unshift([row, col, pos[2] + 1])
                maps[row][col] = 0
            }
        }

        return move
    }

    const testCase1 = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]
    const answer1 = 11
    const testCase2 = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]
    const answer2 = -1


    eET(solution(testCase1), answer1)
    eET(solution(testCase2), answer2)
})