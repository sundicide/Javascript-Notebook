import {expectEqualTest} from "../utils";

// https://school.programmers.co.kr/learn/courses/30/lessons/17680
test("Cache 1차 LRU", () => {
    function solution(cacheSize, cities) {
        const CACHE_HIT = 1
        const CACHE_MISS = 5


        if (cacheSize === 0) {
            return CACHE_MISS * cities.length
        }

        const cacheCity = []
        const cacheAge = []
        let cost = 0
        for (let i = 0; i < cities.length; i++) {
            const city = cities[i].toLowerCase()
            const foundIdx = cacheCity.findIndex(d => d === city)

            if (foundIdx > -1) {
                cost += CACHE_HIT
                cacheAge[foundIdx] = i
                continue
            }

            if (cacheCity.length === cacheSize) {
                const minAge = Math.min(...cacheAge)
                const findIndex = cacheAge.findIndex(d => d === minAge)
                cacheCity.splice(findIndex, 1, city)
                cacheAge.splice(findIndex, 1, i)
            } else {
                cacheCity.push(city)
                cacheAge.push(i)
            }
            cost += CACHE_MISS
        }
        return cost;
    }

    const case1 = [3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"], 50]
    expectEqualTest(solution(case1[0], case1[1]), case1[2])
    const case2 = [5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"], 52]
    expectEqualTest(solution(case2[0], case2[1]), case2[2])
    const case3 = [0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"], 25]
    expectEqualTest(solution(case3[0], case3[1]), case3[2])
})