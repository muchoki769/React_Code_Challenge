Project Approach
This project is a React/Next.js-based waste management web application designed to help users select and book skip bins for waste disposal

1.Project Structure/Technologies
   Framework:Built with Nextjs
   Styling:Utilized TailwindCSS
   Componentization:Broke down the UI into reusable components
2.Fetching and Displaying Data
   API Intergration: Used fetch, to fetch data from remote endpoint(https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)
   State Management:managed loading and data states using useState and useEffect hooks
   Dynamic Rendering:Mapped over the fetched skip data to render each skip as a card,displaying relevant details and images based on skip size
3.User Experience
   Loading States:Provided clear loading and empty states for better user experience
   Responsive Design: Ensured the layout adapts to diffrent screen sizes using TailwindsCSS.
4.Navigation and Routing
    Dynamic Routing: Implemented dynamic routes using Nextjs's App Router.
    SideBar Navigation :Added a persistent sidebar for easy navigation throughout the app.
5.Visual Enhancements
   Background Effects:Added blurred background elements using a custom blog component for visually appealing look
            
<!-- 
I started by designing the layout of the page. I wanted to make sure that the content was easy to read
and that the user could quickly find the information they needed. I used a grid system to create a
responsive design that would work well on a variety of devices.

I use react fetch to get data from the API and then I use the data to render the card components. -->

