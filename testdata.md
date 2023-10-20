# Test commands

I'd do the followings:

- try any command, that is not place => those are discarded
- try place, but make it invalid
  - use numbers below 0 or above 4
  - I follow a strict match of the commands, typos should not be allowed
- use a valid place command
- report
- move until the robot would try to fall off
- turn, move until the end again
  - repeat this in all directions
- try invalid commands