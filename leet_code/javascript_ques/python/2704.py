class Expect:
    def __init__(self, val):
        self.val = val

    def to_be(self, lav):
        if self.val != lav:
            raise ValueError('Not Equal')
        return True

    def not_to_be(self, lav):
        if self.val == lav:
            raise ValueError('Equal')
        return True

def expect(val):
    return Expect(val)
expect(5).to_be(5)
expect(5).not_to_be(6)
expect(5).to_be(6)

class Expect2:
    def __init__(self, val):
        self.val = val

    def to_be(self, lav):
        if self.val != lav:
            raise ValueError('Not Equal')
        return True

    def not_to_be(self, lav):
        if self.val == lav:
            raise ValueError('Equal')
        return True

def expect2(val):
    return Expect2(val)

expect2(5).to_be(5)
expect2(5).not_to_be(6)
expect2(5).to_be(6)
