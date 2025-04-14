import asyncio
import time

def time_limit(fn, t):
    async def wrapper(*args):
        try:
            return await asyncio.wait_for(fn(*args), timeout=t/1000)
        except asyncio.TimeoutError:
            raise Exception('Time Limit Exceeded')
    return wrapper

import asyncio
import time

# Test function that takes longer than the time limit
async def slow_function():
    await asyncio.sleep(2)  # sleep for 2 seconds

# Test function that completes within the time limit
async def fast_function():
    await asyncio.sleep(0.1)  # sleep for 0.1 seconds

# Apply the time limit decorator to the test functions
slow_function_timed = time_limit(slow_function, 1000)  # 1 second time limit
fast_function_timed = time_limit(fast_function, 1000)  # 1 second time limit

# Test the functions
async def test_functions():
    try:
        start_time = time.time()
        await slow_function_timed()
        print("Slow function should have timed out, but didn't")
    except Exception as e:
        print(f"Slow function timed out: {e}")

    try:
        start_time = time.time()
        await fast_function_timed()
        print("Fast function completed within time limit")
    except Exception as e:
        print(f"Fast function timed out: {e}")

asyncio.run(test_functions())
