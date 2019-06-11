## Movie catalog
List with the 20 most popular movies currently

### Application's overview

This application was implemented under the sole purpose of learning about how the library React works.

Below follows a quick overview of the app.

<img src="app_overview.gif">

### Technical choices

As I am still a beginner in programming with React, I opted to go for the simplest architecture and functionalities.
- I used _node.JS_ (basically _npm_ to take care of packages and dependencies).
- To work with real data, I decided to use the API from [The Movie Database](https://developers.themoviedb.org/3).
- To fetch data from the API I used a simple ajax call through jQuery.
- To make the app a little more friendly I implemented a few animations in CSS, e.g. transitions.

### Future work

Due to time constraint and still lack of knowledge, I had to skip some features such as implementing full accessibility. Other features that are worth implementing as optimizations:
- Filtering movies
- Searching movies
- More (non-poluting) animations
- Better distribution of the elements (poster, overview, etc.) in the cards (movie items)
- More test modules
