React Redux Authentication Middleware Example
This example demonstrates a simple user authentication flow in React using Redux with custom middleware.

<!-- The middleware: -->

    Checks if a user is logged in before performing actions.
    Attaches JWT token to API calls.
    Logs user information and API data in the console.

<!-- Features -->

- User login with mock token.
- API call simulation with authentication check.
- Middleware intercepts actions for authorization.
- Console logs for user status and fetched data.

<!-- Installation -->
- Install dependencies
        npm install
- Running the app
        npm run dev

<!-- Usage -->

- Click Login → sets user as logged in.
- Click Call API → middleware checks login, logs user info, and simulates API response.
- Check console to see authentication and API logs.

<!-- File Structure -->

src/
├─ App.jsx               # Main React component
├─ store.jsx             # Redux store with middleware
├─ rootReducer.jsx       # Combines reducers
├─ userReducer.jsx       # User authentication reducer
├─ authMiddleware.jsx    # Middleware handling authentication and API calls


**HAPPY CODING**