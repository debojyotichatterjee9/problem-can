package main

import (
	"errors"
	"fmt"
	"time"
)

func timeLimit(fn func(...interface{}) (interface{}, error), t time.Duration) func(...interface{}) (interface{}, error) {
	return func(args ...interface{}) (interface{}, error) {
		resultChan := make(chan interface{})
		errorChan := make(chan error)

		go func() {
			result, err := fn(args...)
			if err != nil {
				errorChan <- err
			} else {
				resultChan <- result
			}
		}()

		select {
		case result := <-resultChan:
			return result, nil
		case err := <-errorChan:
			return nil, err
		case <-time.After(t):
			return nil, errors.New("Time Limit Exceeded")
		}
	}
}

func main() {
	fn := func(args ...interface{}) (interface{}, error) {
		time.Sleep(2 * time.Second) // Simulate a long-running task
		return "Completed", nil
	}

	limitedFn := timeLimit(fn, 1*time.Second)
	result, err := limitedFn()
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(result)
	}
}
