package main

import (
	"errors"
	"fmt"
)

type Expect struct {
	val interface{}
}

func (e *Expect) ToBe(lav interface{}) error {
	if e.val != lav {
		return errors.New("Not Equal")
	}
	return nil
}

func (e *Expect) NotToBe(lav interface{}) error {
	if e.val == lav {
		return errors.New("Equal")
	}
	return nil
}

func expect(val interface{}) *Expect {
	return &Expect{val: val}
}

func main() {
	e := expect(5)
	if err := e.ToBe(5); err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Equal")
	}

	if err := e.NotToBe(6); err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Not Equal")
	}
}
