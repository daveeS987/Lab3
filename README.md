# Lab-03

Feature1: Pagination
Estimate of time needed to complete: 1 hour
Start time: 3:50pm
Finish time: 5:40pm
Actual time needed to complete: 1:50hr

## Feature 1: Pagination
Why are we implementing this feature?
As a user, I want to have the ability to view additional images so that my view does not become cluttered.
What are we going to implement?
Given that a user opens the application in the browser When the user clicks on a button or link to another page Then the other set of images should be dynamically displayed

How are we implementing it?
Add navigation for the user to switch between two pages. Each page should render a unique set of images from one of the two provided JSON files.
Reset the filters, then repopulate them using only keywords from the images currently being displayed.


Feature2: Mustache Templating
Estimate of time needed to complete: 2 hour
Start time: 5:50
Finish time: 6:30
Actual time needed to complete: 40min

## Feature 2: Templating
Why are we implementing this feature?
As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.
What are we going to implement?
Given that a user opens the application in the browser When the images are displayed on the screen Then each image should be rendered according to a template

How are we implementing it?
Create the appropriate Mustache template in your HTML with the same <h2>, <img>, and <p> elements as the jQuery template from the prior lab.
Refactor the method that renders your images to use Mustache instead of making a copy with jQuery.

## Feature3: Flexbox
Estimate of time needed to complete: 1hr
Start time: 6:30
Finish time: 7:00
Actual time needed to complete: 30 min

## Feature 4: Sort the images
Why are we implementing this feature?
As a user, I want to be able to sort the images so that there is an order to their rendering.
What are we going to implement?
Given that a user is presented with sort options When the user clicks on one option Then the images should be sorted accordingly

How are we implementing it?
Add the ability for the user to sort the images by either title or by number of horns.
Sort the images by one of the properties on page load. This should also apply to the second page of images.

Estimate of time needed to complete: 2hr
Start time: 7:00
Finish time: 8:30
Actual time needed to complete: 1.5