<h2 align="center"><img src="https://raw.githubusercontent.com/MarisKX/Code-Institute-Milestone-Project-2/main/assets/images/c2gtb.png"></h2>
<h1 align="center">Car 2 Go BV (C2G) website and online car showroom</h1>

[View the live project here.](https://mariskx.github.io/Code-Institute-Milestone-Project-2/index.html)

This is the main website for C2G. It is designed to be responsibe and accessible on a range of devices (full size PC's, laptops, tablets, mobile phones), making it easy to navigate for potential customers.

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the company.
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
        3. As a First Time Visitor, I want to easily find contact details, locations on map as well as details of cars they offer.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to find information about new offers.
        2. As a Returning Visitor, I want to find the best way to get in contact with the company with any questions I may have.
        3. As a Returning Visitor, I want to find community links and follow them.

    -   #### Frequent User Goals
        1. As a Frequent User, I want to check to see if there are any newly added cars for rent and/or sell.
        2. As a Frequent User, I want to check to see if there are any new regular customer discounts.

-   ### Design
    -   #### Colour Scheme
        -   The two main colours used are C2G blue (rgb code - 18, 141, 255) and grey (rgb code - 193, 195, 195). These are main colors in our showroom as well as website.
    -   #### Typography
        -   The Josefin Sans font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Josefin Sans is a clean font with a small "twist" so it is both attractive and appropriate.
    -   #### Imagery
        -   Imagery is important. Mid-size car images are randomly generated on the main page, as well as sales page and rental page, layout is made attractive for all screen sizes.

*   ### Wireframes

    -   Landing page wireframe - Desktop-[View](https://github.com/MarisKX/Code-Institute-Milestone-Project-2/blob/main/assets/other/Index%20page.pdf), 
        Mobile-[View](https://github.com/MarisKX/Code-Institute-Milestone-Project-2/blob/main/assets/other/Index%20page%20mobile.pdf)

    -   Cars for sale/cars for rent (uses the same structure) - Desktop-[View](https://github.com/MarisKX/Code-Institute-Milestone-Project-2/blob/main/assets/other/Cars%20for%20sale%20and%20cars%20for%20rent.pdf), 
        Mobile-[View](https://github.com/MarisKX/Code-Institute-Milestone-Project-2/blob/main/assets/other/Cars%20for%20sale%20and%20cars%20for%20rent%20mobile.pdf)

    -   Contact Us Page Wireframe - Desktop-[View](https://github.com/MarisKX/Code-Institute-Milestone-Project-2/blob/main/assets/other/Contact%20page.pdf), 
        Mobile-[View](https://github.com/MarisKX/Code-Institute-Milestone-Project-2/blob/main/assets/other/Contact%20page%20mobile.pdf)

## Features

-   Responsive on all device sizes

-   Interactive elements

    - Randomly seleceted cars to choose from for sale and for rent
    - By clicking on car image (or description) opens window, where user can see 4 pictures of car in larger size depends on the screen)
    - By clicking on car image (or description) opens window, where user can see full description of car, main features are ilustrated with icons

- Navigation is made easier by double options - either from standart menu or in landing page itself by clicking on coresponding section names

## Technologies Used

-   Initial development was made using [Atom](https://atom.io/) text editor

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [javaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 5.0:](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the main menu items in header to add the float transition while being hovered over.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/) - [Results index page](https://raw.githubusercontent.com/MarisKX/Code-Institute-Milestone-Project-2/main/assets/other/Index%20page%20html.png), [Results cars for sale page](https://raw.githubusercontent.com/MarisKX/Code-Institute-Milestone-Project-2/main/assets/other/Cars%20for%20sale%20page.png), [Results cars for rent page](https://raw.githubusercontent.com/MarisKX/Code-Institute-Milestone-Project-2/main/assets/other/Cars%20for%20rent%20page.png), [Results contact us page](https://raw.githubusercontent.com/MarisKX/Code-Institute-Milestone-Project-2/main/assets/other/Contact%20us%20page.png)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://raw.githubusercontent.com/MarisKX/Code-Institute-Milestone-Project-2/main/assets/other/CSS.png)

-  [Snyk javaScript test](https://snyk.io/) - [Results](https://raw.githubusercontent.com/MarisKX/Code-Institute-Milestone-Project-2/main/assets/other/javaScript.png)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the company.

        1. Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the page of their choice. Underneath there is a selection of cars for sale, cars for rent and contact section with maps, providing all companies locations.
        2. The main points are made immediately with two sections on main page - cars for sale and cars for rent both in the page itself as well as in navbar
        3. The user has two options, either check one of the cars system randomly generates or go directly to section of their choice (to buy a car or to rent one)

    2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

        1. The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, each link describes what the page they will end up at clearly.
        2. On the Contact Us Page, there is a large map, indicating locations, which user might be interested in


-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to find the new cars for rent and/or buy.

        1. These are clearly shown in the front page.
        2. They will be directed to a page to their interest.

    2. As a Returning Visitor, I want to find the best way to get in contact with the company with any questions I may have.

        1. The navigation bar clearly highlights the "Contact Us" Page.
        2. Here they can find a map with all contacts, below that is footer section with phone number, email and socail network links.
        3. Whichever socail media link they click, it will be open up in a new tab to ensure the user can easily get back to the website.

    3. As a Returning Visitor, I want to find the Facebook Group link so that I can join and interact with others in the community.
        1. The Facebook Page can be found at the footer of every page and will open a new tab for the user and more information can be found on the Facebook page.

-   #### Frequent User Goals

    1. As a Frequent User, I want to check to see if there are any newly added cars.

        1. The user would already be comfortable with the website layout and can easily click the navigation button of their choice.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Firefox browsers.
-   The website was viewed on a variety of devices such as Desktop (32" and 24"), Laptop, iPhone7, Samsung S20 and Samsung S20+
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

-   

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/MarisKX)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://mariskx.github.io/Code-Institute-Milestone-Project-2/index.html) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/MarisKX)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/MarisKX)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   [Bootstrap4](https://getbootstrap.com/docs/5.0/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

-   [jQuery](https://jqueryui.com/): jQuery Library used throughout the project mainly to make javaScript functions easier with less code to write..

### Content

-   All content was written by the developer.

### Media

-    All pictures of cars was taken from Autoscout24.nl website

### Acknowledgements

-   My Mentor for continuous helpful feedback.

-   Biggest thanks to my wife, without her moral support this project would not gonna be possible!!!
