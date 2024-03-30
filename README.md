
# Operator game


## User Experience (UX)

### User stories

#### Client goals

#### First-time visitor goals

#### Returning visitor goals

#### Frequent visitor goals

## Design

### Color scheme

### Typography

### Imagery

### Wireframes

## Features

>[!TIP]
>To facilitate assessment/testing, uncomment one or more of the lines in [`script.js`](assets/js/script.js) marked as follows:
>
>`// ASSESSMENT uncomment the next line for testing/assessment`

### Welcome screen

#### Gameplay rules section

#### Scoring rules section

### Game area

#### Question area

#### Result area

#### Check Answer button

#### Milestone "popup"

 specify why I use inline styles for buttons

Only for the milestones

### New Game/New Puzzle button 

### Perfect streak counter

### Operator selector toggle

### Future implementations

### Accessibility

aria labels, alt text, colour scheme, font choices

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
- Shields.io – add badges to README

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
>To facilitate assessment/testing, uncomment one or more of the lines in [`script.js`](assets/js/script.js) marked as follows:
>
> `// ASSESSMENT uncomment the next line for testing/assessment`

### Automated testing
W3C validator
Lighthouse

### Manual testing
Testing user stories
Full testing of functionalities

### Accessibility testing

Wave


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




Web Disability Simulator

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

JS

1 x mentor
2 x tutors

Other mentor suggestions: see GitHub Issues

### Content

### Media

#### Images

Favicon: [Mathematics icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/mathematics), modified to fit the color scheme by my, converted to `ico` format with [Favicon.io](https://favicon.io/)

Milestone image by <a href="https://www.freepik.com/free-ai-image/colorful-balloons-decor-background_77741605.htm#page=3&position=9&from_view=search&track=ais&uuid=777890df-6c6e-4ecf-90da-7587aff2328e">vector_corp on Freepik</a>.

#### Videos

### Readme

- [Creating your first README with Kera Cudmore](https://www.youtube.com/watch?v=XbYJ4VlhSnY) by Code Institute
- [Creating your first README](https://github.com/kera-cudmore/readme-examples) by Kera Cudmore
- [Bully Book Club](https://github.com/kera-cudmore/Bully-Book-Club) by Kera Cudmore
- [Bodelschwingher Hof](https://github.com/4n4ru/CI_MS1_BodelschwingherHof/tree/master) by Ana Runje
- [Travel World](https://github.com/PedroCristo/portfolio_project_1/) by Pedro Cristo
- [Sourdough Bakes](https://github.com/siobhanlgorman) by Siobhan Gorman
- [Horizon Photo](https://github.com/Ri-Dearg/horizon-photo/blob/master/README.md#mobile-testing) by Rory Patrick Sheridan- [The README of my first Code Institute project](https://github.com/blahosyl/academic-publishing)



### Acknowledgements

Peter Litauszki for giving me the idea for this project.
