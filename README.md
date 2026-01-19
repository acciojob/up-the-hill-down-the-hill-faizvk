# Up The Hill Down The Hill

## Instructions:

Write a function that calculates the average speed of a person who traveled uphill for a certain amount of time at a given speed and then traveled downhill for the same distance at a different speed. The function should take three arguments:

- upTime: an integer representing the time spent traveling uphill in minutes.
- upSpd: an integer representing the speed traveled uphill in mph.
- downSpd: an integer representing the speed traveled downhill in mph.

The function should return an integer representing the average speed traveled during the entire journey in mph. No rounding is necessary.

## Examples:

```
aveSpd(18, 20, 60) ➞ 30
aveSpd(30, 10, 30) ➞ 15
aveSpd(30, 8, 24) ➞ 12
```

## Constraints:

- All inputs are valid positive integers.
- The input upTime will be less than or equal to 60.
- The input upSpd and downSpd will be less than or equal to 100.

## Acceptance Criteria:

- The function returns an integer representing the average speed traveled during the entire journey in mph.
- The returned average speed is calculated correctly based on the input arguments.
