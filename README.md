# Project Approach

This project is a **React/Next.js-based waste management web application** designed to help users select and book skip bins for waste disposal.

## 1. Project Structure / Technologies

- **Framework:** Built with Next.js
- **Styling:** Utilized Tailwind CSS
- **Componentization:** Broke down the UI into reusable components

## 2. Fetching and Displaying Data

- **API Integration:** Used `fetch` to get data from [API](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)
- **State Management:** Managed loading and data states using `useState` and `useEffect` hooks
- **Dynamic Rendering:** Mapped over the fetched skip data to render each skip as a card, displaying relevant details and images based on skip size

## 3. User Experience

- **Loading States:** Provided clear loading and empty states for better user experience
- **Responsive Design:** Ensured the layout adapts to different screen sizes using Tailwind CSS

## 4. Navigation and Routing

- **Dynamic Routing:** Implemented dynamic routes using Next.js's App Router
- **Sidebar Navigation:** Added a persistent sidebar for easy navigation throughout the app

## 5. Visual Enhancements

- **Background Effects:** Added blurred background elements using a custom blog component for a visually appealing look

---

[View on CodeSandbox](https://codesandbox.io/p/github/muchoki769/React_Code_Challenge/main?import=true&workspaceId=ws_YDtaWXyi5QW7n1VwuehXAy)