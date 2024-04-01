
# Operator game

This interactive game lets users practice the mathematical order of operations for learning or fun. 

Users are shown an equation with the operators missing, and they have to guess the correct operators to make the equation true.

The game has a fully [responsive](#responsivity) and [accessible](#accessibility-testing) desgin, and [a kinder scoring mechanism](#scoring-rules), making it suitable for users of a variety of ages and abilities.

Extra features include the user being able to [select the difficulty level](#operator-selector-toggle) and [celebratory "popups" at certain milestones](#milestone-"popups").

Developer: [Dr. Sylvia Blaho](https://www.linkedin.com/in/blahosylvia/)

![The Operator Game is responsive](testing/automated-testing/responsivity/amiresponsive-showcase.png)

[View the deployed game on Github Pages](https://blahosyl.github.io/operator-game/)

<!--Shield.io badges-->

![GitHub last commit](https://img.shields.io/github/last-commit/blahosyl/operator-game?color=red)
![GitHub contributors](https://img.shields.io/github/contributors/blahosyl/operator-game?color=orange)
![GitHub language count](https://img.shields.io/github/languages/count/blahosyl/operator-game?color=black)


## User Experience (UX)

### User stories

#### Client goals

#### First-time visitor goals

#### Returning visitor goals

#### Frequent visitor goals

## Design

### Visual design

#### Color scheme

#### Typography

#### Imagery

#### Wireframes

### Flow

#### Scoring rules

#### Difficulty level

number of integers
operators: only [+,-, *, /]
result maxed at 2 decimal places

## Features

>[!TIP]
>To facilitate assessment/testing, uncomment one or more of the lines in [`script.js`](assets/js/script.js) following a comment like this:
>
>`// ASSESSMENT uncomment the next line for testing/assessment`
>
>This will show the randomly selected operators and/or the correct equation in the console.


### Responsivity

The game is fully responsive for all device emulators available in Chrome Developer tools, and adjusts to narrow viewports including 280 px in width.

![The Operator Game is responsive](testing/automated-testing/responsivity/amiresponsive-showcase.png)

### Welcome screen

The **Welcome** screen is the first element the user sees. It is visually different from the main game screen, and can be hidden completely by pressing the [Start Game button](#start-game-button) at the end of the Welcome Screen, and shown again by pressing the [Welcome Screen button](#welcome-screen-button) at the very bottom of the main game screen.


The **Welcome** screen contains the following elements:

- [the section describing of how gameplay works](#gameplay-rules-section), 
- [the section describing of how scoring works](#scoring-rules-section), 
- [the **Start Game** button](#start-game-button) with the text "Let's Play!"

The [second section](#scoring-rules-section) is hidden by default, and only the [first section](#gameplay-rules-section) and the [**Start Game** button](#start-game-button) is shown on page load.

The Welcome Screen is responsive on all devices. On small viewports, the the text inside the Welcome Screen sections is set to scroll.

![The Welcome Screen is responsive](testing/automated-testing/responsivity/amiresponsive-welcome-screen-gameplay.png)


#### Gameplay Rules section

This section explains the purpose of the game and how it is played. It also contains a small button to switch to the [Scoring Rules section](#scoring-rules-section) within the Welcome Screen.

![The Gameplay Rules section](readme-pics/gameplay-rules-section.png)


#### Scoring Rules section

This section explains how the scoring works in the game and why it works the way it does. It also contains a small button to switch to the [Gameplay Rules section](#gameplay-rules-section) within the Welcome Screen.

![The Scoring Rules section](readme-pics/scoring-rules-section.png)

#### Start Game button

This button hides the welcome screen and reveals the actual game screen. The text on the button has been changed from "Start Game" to a "Let's Play!", as this is deemed more engaging for the user.

### Game Area

The game area includes the following elements:

- a short instruction line on how to play
- the [Question Area](#question-area) displaying the puzzle to be solved
- the [Solution Area](#solution-area) where the feedback message is shown when the user clicks the [**Check Answer**](#submit-button) button
- the [**Check Answer**](#submit-button) button that displays the appropriate message in the [Solution Area](#solution-area)

![The Game Area](readme-pics/game-area-empty.png)

The game area is responsive on all tested devices. 

![The Game Area is responsive](testing/automated-testing/responsivity/amiresponsive-wrong-answer.png)

#### Question Area

The Question Area displays an equation without the appropriate operator(s). Instead of each of the operators, a drop-down selector is shown, where the user can select the correct operator to make the equation true.

![The Question Area](readme-pics/question-area.png)

The numbers (operands) are selected randomly from the range of integers between 1 and 10 (inclusive). The operators are selected from the array ["+/, "-", "*", "/"].

The operator **+** is shown on each drop-down selector by default. It is reset whenever a new puzzle is generated, but not when the user guess is wrong, so that they can keep track of the guesses they tried more easily.


The difficulty of the puzzle is capped by making sure the result only has a maximum of 2 decimal places. Wheever this is not the case, a new equation is created.

Negative integers are allowed for the solution of the equation, but not for the operands.

[video]

By default, the equation has 3 operands and 2 operators. The number of operands and operators in the equation can be changed by the [Operand selector toggle](#operand-selector-toggle).

The question area is also responsive, and adapts to very narrow viewports with a maximum width of 280 px.

![The Question Area on a 280 px wide viewport](readme-pics/question-area-very-narrow.png)

#### Solution Area

The Solution Area is empty by default, and its content is added by JavaScript when the [**Check Answer**](#submit-button) button is clicked. The content varies depending on whether the user got the answer right, and what guess they submitted.

##### Correct guess

If the user's guess is correct, a congratulatory message appears with some celebratory emojis, and the [**Check Answer**](#submit-button) button is disabled.

![The Solution Area after a correct quess](readme-pics/solution-area-correct.png)

The [Perfect Streak counter](#perfect-Streak-counter) is incremented by 1 on a correct guess.

The user can then play a new game by clicing the [New Game button](#new-game-button).

##### Incorrect guess

If the user's quess is incorrect, another message appears, containing the euqation using the operators selected by the users and its result. The user is also instructed to change an operator.

![The Solution Area after an inorrect quess](readme-pics/solution-area-wrong.png)

The [**Check Answer**](#submit-button) button is also disabled in this case, but it is enabled again when the user changes any of the operators. Changing an operator also clears the Solution Area.

![The Solution Area after an inorrect quess](readme-pics/submit-button-re-enabled.png)


The [Perfect Streak counter](#perfect-Streak-counter) is reset to 0 on an incorrect guess, including [Milestone "popups"](milestone-"popups") and their effects on the [Perfect Streak counter](#perfect-streak-counter).

#### Submit button

The Submit button appears at the bottom of the [Game Area](#game-area), and bears the text "Check Answer" by default.

![The Submit button by default](readme-pics/submit-button-default.png)


When the Submit button is clicked, the app compares the result of the user's guess with the correct results of the equation.

It also populates the [Solution Area](#solution-area) with content depending on whether the user's guess was correct.

![The Solution Area after an inorrect quess](readme-pics/solution-area-wrong.png)


The Submit button is disabled once it has been pressed. It is enabled again in the following cases:

- when the user changes an operator
- when a new game is run
- when the page is reloeaded
- when the [**Continue**](#continue-button) button on the Milestone "popup" is clicked

When the Submit button is re-enabled within a game, its text content changes to "Check Again".

![The Submit button text changes after being re-enabled](readme-pics/submit-button-re-enabled.png)

The Submit button also triggers [Milestone "popups"](milestone-"popups") when the [Perfect Streak counter](#perfect-streak-counter) reaches certain values.

### Milestone "popups"

 specify why I use inline styles for buttons and text
 Only for the milestones and the [Perfect Streak counter](#perfect-streak-counter)
 
#### Continue button


### New Game button 

The New Game button is located directly below the [Game Area](#game-area) and bears the text "New Puzzle" (since "New Game" was found confusing by some testers regarding how the [Perfect Streak counter](#perfect-streak-counter) works).

Clicking the New Game button resets the [Game Area](#game-area) to its defaults and generates a new puzzle, but it does **not** reset the [Perfect Streak counter](#perfect-streak-counter) or the [Operand selector toggle](#sperand-selector-toggle) and its effect (see the [Scoring rules](#scoring-rules) section for the reasoning why).

![The New Game button](readme-pics/new-game-button.png)

### Perfect Streak counter

The Perfect Streak counter records and displays the length of the user's consecutive correct guesses. It is only resent when the user submits an incorrect guess or reloads the page, but not when the user generates a new puzzle with the [New Game button](#new-game-button) or changes the difficulty level with the [Operand selector toggle](#sperand-selector-toggle) without solving the current puzzle (see the [Scoring rules](#scoring-rules) section for the reasoning why).

![The Perfect Streak counter by default](readme-pics/perfect-streak-counter.png)

The Perfect Streak counter changes background color in connection with the [Milestone "popups"](#milestone-"popups"): it gets a new background color after every milestone. This color effect is reset when the streak counter is reset.

![The Perfect Streak counter changed color](readme-pics/perfect-streak-counter-color.png)


### Operand Selector toggle

The Operand Selector toggle lets the user choose the difficulty level of the game by selecting the number of operands in the equation they have to solve. The number of operator drop-down selectors is adjusted accordingly (it is one less than the number of operands).

The Operand Selector toggle currently offers a range between 2 and 6 (inclusive). It is set to 3 by default.

![The Operand Selector toggle](readme-pics/operand-selector-toggle.png)

When the Operand Selector toggle is changed, the equation template is adjusted to consist of the number of operands selected by the user. This also resets the [Game Area](#game-area) to its defaults and generates a new puzzle, but it does **not** reset the [Perfect Streak counter](#perfect-streak-counter) or the [Operand selector toggle](#sperand-selector-toggle) and its effect (see the [Scoring rules](#scoring-rules) section for the reasoning why).

### Welcome Screen button

This is the last element of the gameplay screen. Its fucntion is to enable the user to show the [Welcome screen](#welcome-screen) again, in case they want to double-chekc the rules. Its text content is "Show the rules again".

![The Welcome Screen button](readme-pics/welcome-screen-button.png)

This button is hidden whenever the [Welcome screen](#welcome-screen) or a [Milestone "popup"](#milestone-"popups") is shown.

### Future implementations

While this game is relatively minimalistic, there are several additional customisation options that were beyond the scope of the current project:

- **the number of operands**: This can easily be changed by modifying the `"number-selector"` form in the HTML code to include larger numbers. The only concern  here is that the [Question area](#question-area) might look overcrowded and take up too much space on smaller screens.
- **the range of operands**: This is also easily changed by modifying "11" in the function `showRandomOperands(11)` in the [Javascript code](assets/js/script.js) to an integer of our choice. 
	- As a further enhancement, a drop-down similar to the [Operand Selector toggle](#operand-selector-toggle) could let the user choose the upper bound of the generated operands themselves.
- **negative operands**: By rewriting the function `generateRandomNumbers()` in the [Javascript code](assets/js/script.js) so that each operand is multiplied by either `1` or `-1` randomly, negative operands can be included in the game. The function `eliminateZero()` would still make sure 0 is not one of the operands.
- **the range of operators**: Exponentiation is fairly straightforward to add by modifying the function `generateRandomOperators()` in the [Javascript code](assets/js/script.js) so that the `operators` array includes `**` for exponentiation.
	- Including roots and parentheses in the equation would require some more rewriting of the concatenation and evaluation rules of the game.
- **color palettes**: A different kind of customisation option would be to enable the user to choose their preferred color palette. There are 2 different ways of implementing this:
	1. Users can select any color for certain elements in the game. This can be implemented with a some  color picker `form` elements. However, additional care has to be taken when selecting which elemts the user can change, to ensure that [sufficient color contrasts are maintained](#color-contrast-testing).
	2. Users can select between pre-defined color palettes, changing several elements at once. Naturally, [color contrast testing](#color-contrast-testing) would also need to be done as part of implementing this feature.
- **a timer option**: This is a very popular option for small games and quizzes, however, it is contrary to the ["kinder scoring" approach](#scoring-rules) taken in this game. Therefore, I would only choose to implement a timer as an opt-in, non-default option for this game.

### Accessibility

The game avoids visual clutter, such as excessive borders and shadows, elements of very different shapes, color gradients, transparency, background images behind normal text, and auto-moving elements of all kinds. 

These elements tend to cause problems for a variety of users (e.g. those with visual impairment, executive functioning impairment, vertigo, etc.), so steering clear of these chimes in perfectly with accessibility goals.

The content of the site is structured with semantic tags, and Aria labels are used for sections without headings.

Alt text is used for embedded visual elements.

The color scheme was designed to ensure sufficient contrast for legibility, and modified where necessary to ensure that color combinations meet [WCAG AAA](https://ialabs.ie/what-is-the-difference-between-wcag-a-aa-and-aaa/) standards (see the [Accessibility testing](#accessibility-testing) section for more detail).

The fonts used in the game are easy to read, prioritizing legibility over eccentricity. 

External links open in a new tab.

## Technologies used

### Languages used

- HTML 
- CSS
- JavaScript
- Markdown

### Frameworks,  Libraries & Programs Used

### Frameworks,  Libraries & Programs Used

- [Am I Responsive?](https://ui.dev/amiresponsive) – to show the website on a range of devices
- [Balsamiq](https://balsamiq.com/) – wireframes
- [Birme](https://www.birme.net/) – resize images and convert to `webp` format
- [Coolors.co](https://coolors.co/) - color palettes
- [Favicon.io](https://favicon.io/) – create the favicon
- [Flaticon](https://www.flaticon.com/) image for favicon
- [FontAwsome](https://fontawesome.com/) – icons for the nav bar and hamburger menu (not used in the final version)
- [Git](https://git-scm.com/) – version control
- [GittHub](https://github.com/) – store the source files
- [GitHub Desktop](https://desktop.github.com/) – GitHub UI
- [GitHub Issues](https://github.com/features/issues) – project management, bug tracking
- [GitHub TOC generator](http://github.com/3kh0/readme-toc/)
- [GitHub web editor](https://github.com/) - the only way (known to me) to add videos to the README
- [GitPod](https://gitpod.io/) – Integrated Development Environment (only used for tutoring)
- Google Developer Tools – troubleshoot, test responsivity and styling
- [Google Fonts](https://fonts.google.com/) - import fonts used on the website
- [Lipsum](https://www.lipsum.com/), [loremipsum.io](https://loremipsum.io/) – Lorem Ipsum generators (not used in final version)
- [MacDown](https://macdown.uranusjr.com/) – Markdown editor
- [Preview](https://support.apple.com/guide/preview/welcome/mac) – cropping images
- [PythonTutor](https://pythontutor.com/) – debugging Javascript Code
- [WebAIM](https://webaim.org/resources/contrastchecker/) – color contrast checking
- [Shields.io](https://shields.io/) – add badges to README

## Deployment

### Local deployment

To view the site on your local machine (laptop or desktop), follow these steps:

1. click the following link to download the [zipped project folder from GitHub](https://github.com/blahosyl/operator-game/archive/refs/heads/main.zip).
2. double click on the downloaded zip file `operator-game-main.zip` to unzip it.
3. in the folder `operator-game`, double click on `index.html` to open it in your browser.

>[!IMPORTANT]
> Do not take `index.html` out of the folder, or change the folder structure in any way, as this may break the file paths defined in the project. 

### Fork the repository

You can fork the repository by following these steps:

1. Log in to [GitHub](https://github.com/) (if you don't have a GitHub account yet, you can [create one](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github) for free).
2. Navigate to the project website [https://github.com/blahosyl/operator-game](https://github.com/blahosyl/operator-game).
3. Click on **Fork** in the upper right part of the screen.
4. On the next page you have the possibility to change the repository name. To do this, simply write your desired name in the text field in the center part of the screen. You can also leave the name as it is.
5. Click **Fork** in the bottom right part of the screen.

>[!TIP]
>If you do rename the repository, make sure to keep the [GitHub naming conventions](https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Gov-Org-HowTo/Naming-Repos.md) in mind. 



### Deployment on GitHub Pages

The site was deployed on GitHub pages using the steps below. You can follow the same steps to deploy it on your GitHub account after you have forked the repository.

1. Log in to [GitHub](https://github.com/) (if you don't have a GitHub account yet, you can [create one](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github) for free).
2. Navigate to the project website [https://github.com/blahosyl/operator-game](https://github.com/blahosyl/operator-game).
3. Click on [Settings](https://github.com/blahosyl/operator-game/settings) in the top right of the screen.
4. On the left-hand menu, click [Pages](https://github.com/blahosyl/operator-game/settings/pages).
5. In the center of the page under **Branch**, select **main** from the dropdown menu, then click **Save**.
6. After the site refreshes automatically, a message appears in the top center part of the screen, displaying the link to the deployed site: "Your site is live at [https://blahosyl.github.io/operator-game/](https://blahosyl.github.io/operator-game/)". 

>[!NOTE]
>The link will look stlightly different for you, containing your [GitHub username](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/remembering-your-github-username-or-email) instead of `blahosyl`. 

>[!NOTE]
>If you have renamed the repository when forking it, your chosen repository name will appear instead of `operator-game` in the deployment link.

## Testing

>[!TIP]
>To facilitate assessment/testing, uncomment one or more of the lines in [`script.js`](assets/js/script.js) following a comment like this:
>
> `// ASSESSMENT uncomment the next line for testing/assessment`
> 
> This will show the randomly selected operators and/or the correct equation in the console.

Issues and bugs are tracked in [Github Issues](https://github.com/blahosyl/operator-game/issues).


### Automated testing

#### Code validation

The [`html`]#(html-validation-with-the-w3c-validator), [`css`](#css-validation-with-jigsaw) and [`js`](#javascript-validation-with-jshint) files of the project were periodically validated throughout development.

The issues discovered during validation are tracked in GitHub Issues [#37](https://github.com/blahosyl/operator-game/issues/37) and [#38](https://github.com/blahosyl/operator-game/issues/38).

##### HTML validation with the W3C validator

The `html` file of the project was regularly tested by the [W3C validator](https://validator.w3.org/). 

In the current version of the site, [no errors or warnings were found during validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fblahosyl.github.io%2Foperator-game).

![HTML: no issues or warnings](testing/automated-testing/w3c-html/html-validation.png)


##### CSS validation with Jigsaw

The  `css` file of the project was regularly tested by [Jigsaw](https://jigsaw.w3.org/css-validator/). The issues discovered during validation are tracked in [GitHub Issues](https://github.com/blahosyl/enlightened-publishing/issues).

In the current version of the site, [no errors or warnings were found during validation](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fblahosyl.github.io%2Foperator-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).


![CSS: no issues or warnings](testing/automated-testing/jigsaw-css/css-validation.png)

##### JavaScript validation with JSHint

The  `js` file of the project was regularly tested by [JSHint](https://jshint.com/). The issues discovered during validation are tracked in [GitHub Issues](https://github.com/blahosyl/enlightened-publishing/issues).

In the current version of the site, no errors or warnings were found during validation.


![JS: no issues or warnings](testing/automated-testing/jshint-js/js-validation.png)

#### Lighthouse

##### Lighthouse performance testing

Lighthouse performance tests were carried out throughout development (selected tests can be found in the folders [`lighthouse-performance`](testing/automated-testing/lighthouse-performance)) and [`lighthouse-full`](testing/automated-testing/lighthouse-full)). No significant issues were found.

The current performance score is [90 on mobile](testing/automated-testing/lighthouse-full/mobile/blahosyl.github.io-20240401T134642.html) and [100 on desktop](testing/automated-testing/lighthouse-full/desktop/blahosyl.github.io-20240401T134508.html).

##### Lighthouse accessibility testing

Lighthouse accessibility tests were carried out throughout development (selected tests can be found in the folders [`lighthouse-accessibility`](testing/automated-testing/lighthouse-accessibility)) and [`lighthouse-full`](testing/automated-testing/lighthouse-full)). 

On issue was found, which was fixed in [this commit](https://github.com/blahosyl/operator-game/commit/f05ec2ee280be0389fb87750e6a2e98705d1c5fd).


The current performance score is 100 on both [mobile](testing/automated-testing/lighthouse-full/mobile/blahosyl.github.io-20240401T134642.html) and [desktop](testing/automated-testing/lighthouse-full/desktop/blahosyl.github.io-20240401T134508.html).

![Accessibility score: 100](readme-pics/lighthouse-full-mobile.png)

![Accessibility score: 100](readme-pics/lighthouse-full-desktop.png)


### Manual testing
Testing user stories
Full testing of functionalities

### Accessibility testing

#### Automated accessibility testing

The process and results of automated accessibility testing can be found in the section [Lighthouse accessibility testing](#lighthouse-accessibility-testing).

#### Manual accessibility testing

##### Color contrast testing

The [WebAIM](https://webaim.org/resources/contrastchecker/) was used to ensure that the text and background color of each section provides sufficient contrast for legibility.

In the instances where this was not the case, the colors themselves or their arrangement was changed to ensure that accessibility standards are met. Related issues are [#41](https://github.com/blahosyl/operator-game/issues/41) and [#15](https://github.com/blahosyl/operator-game/issues/15), as well as [this commit](https://github.com/blahosyl/operator-game/commit/f2fad4e27e714602503d1abe5dffd858d1ce7f65).

The resulting color scheme is as follows:

![Color palette](readme-pics/color-palette.png)

The color variable names used in the project are as follows:

|color name 	|HEX code|
|---			|---	|
|dark-blue	|#004056| 
|med-blue		|#2E7E8E| 
|light-blue	|#1ADAE8|
|peach			|#FCBFAB|
|med-orange	|#DC3A04|
|light-orange	|#FCAF02|
|red			|#EB0000| 
|white			|#FFFFFF| 
|black			|#000000|


The paired colors have the following contrasts:

| color 1 |color 2 |contrast | [WCAG AAA](https://ialabs.ie/what-is-the-difference-between-wcag-a-aa-and-aaa/) | comments |
|---			|---		|:---:		|:---:|--- |
|dark-blue 	|white 	|11.24:1 	| ✅ |   |
|orange	 	| dark-blue | 6.03:1 |✅|only used for large text|
|med-blue 	| white 	| 4.52:1 	| ✅ |only used for large text|
|red 			| white	 | 4.63:1	| ✅ |only used for large text|
|med-orange 	| white	| 4.51:1	|✅ |only used for graphical objects|
|light-orange |black	|11.27:1	|✅	 |	|
|light-blue 	|black 	|12.23:1	|✅ |	|
|light-blue 	|dark-blue|6.55:1	|✅ |	|
|peach		 	|dark-blue|7.05:1	|✅ |	|


##### Web Disability Simulator

The [Web Disability Simulator](https://chrome.google.com/webstore/detail/web-disability-simulator/) was used to check the site for a variety of conditions. The site was found to be fully functional for these conditions:

- Sight
	- Total color blindness
	- Yellow-Blue color blindness
	- Red-Green color blindness
	- Sunshine
- Mobility
	- Parkinsons (keyboard navigation)


In addition, the design accommodates the following conditions with some of its properties:

- Read and write
	- Dyslexia
		- avoid long blocks of text
		- use proper spacing and line height
		- avoid fonts with complicated and complex characters
- Concentration
	- give the website a simple and clean design
	- avoid animations or auto-playing elements
	- avoid having too much content on the same page

### Bugs
#### Known bugs
#### Solved bugs




## Credits

### Study materials

The following resources were used to learn/double check general, atomic functionalities/syntax:

- [`form select` element](https://www.w3schools.com/html/html_form_elements.asp)
- [Get the `value` from a `select` form](https://www.w3schools.com/jsref/prop_select_value.asp)
- [Select the default value in a `select` form](https://stackoverflow.com/a/3518011)
- [`form` color picker](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_color)
- [Call a function within a function](https://stackoverflow.com/a/4524890)
- [Slice a character off the end of a string](https://stackoverflow.com/a/952945)
- [Remove a certain characrer from a string](https://www.scaler.com/topics/javascript-remove-character-from-string/)
- [Evaulate a string as a mathematical expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_direct_eval!)
- [Docstrings](https://stackoverflow.com/questions/34205666/utilizing-docstrings)
- [Enable and disable an input button](https://stackoverflow.com/a/13831737)
- [Check if a number is an integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
- [Set timeout before `alert` execution](https://stackoverflow.com/a/41936135)
- [Clone node](https://www.w3schools.com/jsref/met_node_clonenode.asp)
- [Insert before](https://www.w3schools.com/jsref/met_node_insertbefore.asp)
- [Change display style of DOM elements with Javasscript](https://www.w3schools.com/jsref/prop_style_display.asp)
- [Inheriting opacity in CSS](https://css-tricks.com/forums/topic/opacity-of-child-element/), [2](https://stackoverflow.com/questions/5770341/i-do-not-want-to-inherit-the-child-opacity-from-the-parent-in-css)
- [CSS `overflow`](https://www.w3schools.com/cssref/pr_pos_overflow.php)
- [Image color picker](https://imagecolorpicker.com/)
- [Iterate over a string](https://buzzcoder.gitbooks.io/codecraft-javascript/content/string/loop-through-a-string.html)
- [`replace()` method](https://www.freecodecamp.org/news/javascript-replace-how-to-replace-a-string-or-substring-in-js/)
- [Box shadows](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

### Code

The following sources contributed code or suggestions to specific functions within the project:

- Lewis from the tutoring team helped me solve [this issue](https://github.com/blahosyl/operator-game/issues/30).
- Roo from the tutoring team helped me solve [this issue](https://github.com/blahosyl/operator-game/issues/5).
- Rory Patrick Sheridan, my mentor, helped me solve this [JSHint warning](https://github.com/blahosyl/operator-game/issues/38), and gave me the tips and and heads up described in [these issues](https://github.com/blahosyl/operator-game/issues?q=is%3Aissue+label%3Amentor).

### Content

All text content was written by me.

### Media

#### Images

Favicon: [Mathematics icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/mathematics), modified to fit the color scheme by my, converted to `ico` format with [Favicon.io](https://favicon.io/)

Milestone image by [vector_corp on Freepik](https://www.freepik.com/free-ai-image/colorful-balloons-decor-background_77741605.htm#page=3&position=9&from_view=search&track=ais&uuid=777890df-6c6e-4ecf-90da-7587aff2328e).

### Readme

- [Creating your first README with Kera Cudmore](https://www.youtube.com/watch?v=XbYJ4VlhSnY) by Code Institute
- [Creating your first README](https://github.com/kera-cudmore/readme-examples) by Kera Cudmore
- [Bully Book Club](https://github.com/kera-cudmore/Bully-Book-Club) by Kera Cudmore
- [Bodelschwingher Hof](https://github.com/4n4ru/CI_MS1_BodelschwingherHof/tree/master) by Ana Runje
- [Travel World](https://github.com/PedroCristo/portfolio_project_1/) by Pedro Cristo
- [Sourdough Bakes](https://github.com/siobhanlgorman) by Siobhan Gorman
- [Horizon Photo](https://github.com/Ri-Dearg/horizon-photo/blob/master/README.md#mobile-testing) by Rory Patrick Sheridan- [The README of my first Code Institute project](https://github.com/blahosyl/academic-publishing)


### Acknowledgements

I would like to thank Peter Litauszki for giving me the idea for this project, and for being an enthusiastic tester.

I am also grateful to my mentor Rory Patrick Sheridan for his super-useful advice and great insights!

Last but definitely not least, I would like to thank [Lewis](https://github.com/blahosyl/operator-game/issues/3) and Roo from the tutoring team for their efficient and friendly help when I got stumped.
