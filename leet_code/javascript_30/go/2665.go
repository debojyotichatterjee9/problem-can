
package main

import "fmt"

type Counter struct {
    init    int
    lastVal int
}

func (c *Counter) Increment() int {
    c.lastVal++
    return c.lastVal
}

func (c *Counter) Decrement() int {
    c.lastVal--
    return c.lastVal
}

func (c *Counter) Reset() int {
    c.lastVal = c.init
    return c.lastVal
}

func createCounter(init int) *Counter {
    return &Counter{init: init, lastVal: init}
}

func main() {
    counter := createCounter(5)
    fmt.Println(counter.Increment()) // 6
    fmt.Println(counter.Decrement()) // 5
    fmt.Println(counter.Reset())     // 5
}
