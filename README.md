# Stale Closure in React's useEffect Cleanup Function

This example demonstrates a common error in React's `useEffect` hook: accessing a stale closure variable within the cleanup function.  The `count` variable inside the cleanup function references the value of `count` at the time the `useEffect` hook was initially mounted, not the current value.

## Bug

The `bug.js` file contains a React component that demonstrates this issue. The cleanup function in `useEffect` attempts to log the current `count` but instead logs the initial value of `count` (0). 

## Solution

The `bugSolution.js` file provides a corrected version.  The solution is to use functional updates or ref to ensure that the cleanup function uses the most current value of `count`.