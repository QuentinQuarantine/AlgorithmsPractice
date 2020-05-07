def testCase(func):
    def tryCase(testName, expectedValue, *args, **kwargs):
        args_repr = [repr(a) for a in args]
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]
        signature = ", ".join(args_repr + kwargs_repr)
        result = func(*args, **kwargs)
        assert result == expectedValue, f"{testName}: {func.__name__}({signature})\nExpected: {expectedValue} Result: {result}"
    return tryCase