# Focus Flow
A local-first Pomodoro timer and lightweight task list.

## Run
Open `index.html` in a modern browser. No build step or external dependency is required.

## Features
- 25-minute focus countdown with start, pause, and reset
- Add and complete tasks
- Persist tasks in browser localStorage

## Manual smoke test
1. Add a task and refresh; it should remain.
2. Complete the task; it should disappear.
3. Start the timer, pause it, and reset it.
4. Open DevTools and confirm no remote requests are made.
