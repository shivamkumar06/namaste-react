# namaste-react



# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Diffrential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused codes
- Different dev and prod bundles




# Namaste Food

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - RestaurantCard
 *        - Img
 *        - Name of Rest, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 Two Types of Export/Import

 - Default Export/Import
 export default Component;
 import Component from "path";

 - Named Export/Import
 export const Component;
 import {Component} from "path";

 # Redux Toolkit
    - Install @reduxjs/toolkit and react-redux
    - Build our store 
    - Connect our store to our app
    - Slice (cartSlice)
    - Dispatch(action)
    - Selector


 # Types of Testing (developer)
   - Unit Testing
   - Integration Testing
   - End to End Testing - e2e testing

# Setting up testing in our app
   - Install React Testing Library
   - Install Jest
   - Install Babel Dependency
   - Configure Babel
   - Configure Parcel Config file to disable default bable transpilation
   - Jest - npx jest --init
   - Install jsdom library
   - Install @babel/preset-react - to make JSX work in test cases
   - Include @babel/preset-react inside babel.config.js
   - Install @testing-library/jest-dom