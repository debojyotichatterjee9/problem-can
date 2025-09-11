def create_counter(n):
    counter = n - 1
    def counter_function():
        nonlocal counter
        counter += 1
        return counter
    return counter_function


def create_counter2(n):
    counter = n - 1
    def counter_function():
        nonlocal counter
        counter += 1
        return counter
    return counter_function
