test("set test", () => {
    const a = new Set()
    a.add("a")
    a.add("b")
    a.add("b")
    console.log(a.has("a"))
    console.log(a)
})