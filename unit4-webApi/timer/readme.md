# Objective

## Learning

In this lab, we will be practicing with basic DOM scripting. We will utilize the `setTimeout` and `setInterval` Web API timers. We will also need to utilize HTML.

Topics:

- DOM Scripting.
- The Web API  `setTimeout` timer.
- The Web API `setInterval` timer with `clearInterval`.
- HTML.

## Achieving

In this lab, we will want to create a MISSION COUNTDOWN.

Your work will result in:

- A website that displays a MISSION COUNTDOWN title.
- A button with the text GET READY? that starts the timeout timer.
- A header that displays GET READY... that changes to READY! when the time out is complete.
- A button with the text START COUNTDOWN that starts the interval timer.
- When START COUNTDOWN is clicked, an interval timer appears on the page that countdowns from 5 to 1.
- After 1 in the interval timer, the display changes to GO!

# Procedure

## Setting up the HTML

- [ ] This page will need a few of elements:
- [ ] A `<h1>` with the text MISSION COUNTDOWN.
- [ ] A `<button>` with the text GET READY? and the id "start-timeout".
- [ ] A `<h2>` with the id of "timeout-display" that is initially empty.
- [ ] A `<button>` with the text START COUNTDOWN and the id "start-interval".
- [ ] A `<h2>` with the id of "interval-display" that is initially empty.
- [ ] You will need to import `script.js` into `index.html`.

## Getting our DOM elements with `getElementById`

- [ ] In `script.js`, utilize the DOM selector `getElementById` to grab our four element nodes and assign them to individual variables.

## Assigning our event listeners 

- [ ] Utilizing the variable you assigned the DOM selector to, append `.addEventListener()` to the "start-timeout" button.
- [ ] Repeat this step for the "start-interval" button.
- [ ] `addEventListener()` takes two arguments: the event and the function that represents the event that will occur. 
- [ ] The event should be 'click' and the callback functions will be described below.

## Creating our callback function to the 'start-timeout' `addEventListener`

- [ ] The first thing that needs to happen is the `textContent` of our "timeout-display" changes to "Getting ready..."
- [ ] Refer to the syntax of `setTimeout` here: [MDN setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [ ] The first argument passed to `setTimeout` is a callback function that represents what happens once the timer expires.
- [ ] When the timer expires, we want the `textContent` of "timeout-display" to change to "READY"
- [ ] We want the timer to expire in 5 seconds which is the second argument passed to `setTimeout`. It should be passed in as miliseconds.

## Creating our callback function to the 'start-interval' `addEventListener`

- [ ] The first thing that needs to happen is the creation of a `count` variable that starts at `5`.
- [ ] Then, create a variable to hold our `setInterval` timer.
- [ ] Refer to the syntax of `setInterval` here: [MDN setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [ ] The first argument passed to `setInterval` is a callback function that represents what happens every time the delay or interval occurs.
- [ ] Inside of this callback function, we want the `textContent` of "interval-display" to decrement.
- [ ] Set up an `if` statement to catch when count is less than 0. 
- [ ] Inside of this `if` statement, change the `textContent` to be "GO!"
- [ ] Inside of this `if` statement, utilize `clearInterval` and pass in the variable that holds the `setInterval` timer.
- [ ] The second argument passed to `setInterval` is the time in miliseconds we want the delay or interval to be. We want it to be 1 second.

# Review

In this lab, we utilized the `setTimeout` and `setInterval` timers to achieve two different kinds of display to the user.

The software should:

- Be a website that displays a MISSION COUNTDOWN title.
- Have a button with the text GET READY? that starts the timeout timer.
- Have a header that displays "Getting ready..." when GET READY? is clicked, that changes to READY! when the time out is complete.
- Have a button with the text START COUNTDOWN that starts the interval timer.
- When START COUNTDOWN is clicked, an interval timer appears on the page that countdowns from 5 to 1.
- After 1 in the interval timer, the display changes to GO!

## Going Further

- Right now, you can click the buttons multiple times which will create multiple timers. You can also start the countdown before you get ready. How can you resolve these bugs?
- Can you change the text colors so that it is red when the user is waiting and green when the user is ready to go?
- Feel free to practice your CSS and style this page further.

## Part Two

-------------------

## Learning

In this lab, we will extend the previous [Timers](https://online.uprighted.com/lessons/written/timer) lab to include a nested timer. All of the topics will be the same, we will just be diving into more complexity. If you did not complete the previous lab, you can find a basic version at this link: [Mission Countdown Timer Lab](https://replit.com/@limzkil/mission-countdown-timer#index.html).

Topics:

- DOM Scripting.
- The Web API `setInterval` timer with `clearInterval`.
- Booleans.
- HTML.

## Achieving

In this lab, you will have a nested `setInterval` timer that fires after the initial interval is complete.

Your work will result in:

- When the initial `setInterval` hits "GO!" as described in the previous lab, another `setInterval` will fire.
- This new `setInterval` will change the content of three `<h2>`s to print "GO!" one after the other.

## Procedure

### Adding three new `<h2>`s
- [ ] Within `index.html`, create three new `<h2>`s beneath "interval-display" that all have the class "repeat-go".

### Gaining reference to the new `<h2>`s in JavaScript
- [ ] Utilize a query selector that gets all elements by class and assign this to the variable `repeatGo`.

### Setting up our new `setInterval` timer
- [ ] Below the first `clearInterval` and **within the same scope**, do the following:
- [ ] Set up an `if` whose condition checks if `isCountedDown` is true.
- [ ] Within this `if`: `repeatGo` is currently a HTML Collection, not an Array. Turn it into an Array and assign the result to `repeatGoArray`.
- [ ] Set up the variable `index` with the initial value of 0.
- [ ] Create a variable to hold the new `setInterval` timer.
- [ ] The callback function to this second `setInterval` should target `repeatGoArray` at `index` and change its `textContent` to "GO!". It should also increment index. 
- [ ] Beneath the incrementation of index, we will need another `if` statement that checks if `repeatGoArray` at `index` is undefined.
- [ ] Within this `if`: call `clearInterval()` and pass in the variable holding the timer as its argument.
- [ ] The new `setInterval` should fire every second.

## Review

The software should:

- Now print "GO!" three times on a one second delay after the intial `setInterval` completes.

## Going Further

- Refer to the Going Further on the previous lab and complete those suggestions.
- Refactor the logic handling the nested timer using a [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement) for more concision.
- Remove the 'repeat-go' elements in `index.html`. Instead, use JavaScript to programmatically generate these elements in the nested timer.
