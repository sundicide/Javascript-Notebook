// https://school.programmers.co.kr/learn/courses/30/lessons/86052

import {expectEqualTest, LOG} from "../utils";

test("빛의 경로 사이클", () => {
    function solution(grid) {
        const ROW = grid[0].length
        const COLUMN = grid.length

        const visited = {};
        for (let r = 0; r < COLUMN; r++) {
            visited[r] = {};
            for (let c = 0; c < ROW; c++) {
                visited[r][c] = {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                };
            }
        }

        const DIR = {
            TOP: 0,
            RIGHT: 1,
            BOTTOM: 2,
            LEFT: 3
        }

        function getNextPos(pos) {
            let [x, y, dir, ch] = pos
            let [newX, newY, newDir, newCh] = pos

            switch (dir) {
                case DIR.TOP:
                    newX -= 1
                    break
                case DIR.RIGHT:
                    newY -=1
                    break
                case DIR.BOTTOM:
                    newX += 1
                    break
                case DIR.LEFT:
                    newY += 1
            }

            if (newX < 0) {
                newX = COLUMN - 1
            } else if (newX > COLUMN - 1) {
                newX = 0
            }

            if (newY < 0) {
                newY = ROW - 1
            } else if (newY > ROW - 1) {
                newY = 0
            }

            newCh = grid[newX][newY]

            if (newCh === 'S') {
            } else if(newCh === 'L') {
                if (dir === DIR.TOP) newDir = DIR.LEFT
                else if (dir === DIR.RIGHT) newDir = DIR.TOP
                else if (dir === DIR.BOTTOM) newDir = DIR.RIGHT
                else newDir = DIR.BOTTOM
            } else if (newCh === 'R') {
                if (dir === DIR.TOP) newDir = DIR.RIGHT
                else if (dir === DIR.RIGHT) newDir = DIR.BOTTOM
                else if (dir === DIR.BOTTOM) newDir = DIR.LEFT
                else newDir = DIR.TOP
            }

            return [newX, newY, newDir, newCh]
        }

        const res = []
        for (let i = 0; i < COLUMN; i++) {
            for (let j = 0; j < ROW; j++) {

                for (let k = 0; k < 4; k++) {
                    if (visited[i][j][k] === 1) {
                        continue
                    }
                    let newPos = [i, j, k, grid[i][j]]
                    visited[i][j][k] = 1
                    let count = 1
                    while(true) {
                        newPos = getNextPos(newPos)
                        visited[newPos[0]][newPos[1]][newPos[2]] = 1
                        if(i === newPos[0] && j === newPos[1] && k === newPos[2]) {
                            res.push(count)
                            break
                        }
                        count++
                    }
                }
            }
        }
        return res.sort((a, b) => a - b)
    }

    const case1 = [["SL","LR"], [16]]
    expectEqualTest(solution(case1[0]), case1[1])
    const case2 = [["S"], [1,1,1,1]]
    expectEqualTest(solution(case2[0]), case2[1])
    const case3 = [["R","R"], [4,4]]
    expectEqualTest(solution(case3[0]), case3[1])
})