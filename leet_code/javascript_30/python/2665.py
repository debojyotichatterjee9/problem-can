class Counter:
    def __init__(self,init):
        self.init = init
        self.last_val = init

    def increment(self):
        self.last_val += 1
        return self.last_val

    def decrement(self):
        self.last_val -= 1
        return self.last_val

    def reset(self):
        self.last_val = init
        return self.last_val

def create_counter(init):
    return Counter(init)

counter = create_counter(5)
print(counter.increment())
print(counter.increment())
print(counter.increment())
print(counter.increment())
print(counter.decrement())
print(counter.reset())
