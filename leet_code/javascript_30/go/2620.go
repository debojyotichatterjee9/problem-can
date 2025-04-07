package main

import "fmt"

func createCounter(n int) func() int {
	counter := n - 1
	return func() int {
		counter++
		return counter
	}
}

func createCounter2(n int) func() int {
	counter := n
	return func() int {
		counter++
		return counter - 1
	}
}

func main() {
	counter := createCounter(5)
	fmt.Println(counter()) // 5
	fmt.Println(counter()) // 6

	counter2 := createCounter2(5)
	fmt.Println(counter2()) // 5
	fmt.Println(counter2()) // 6
}
