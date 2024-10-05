# Buz - Short Video Sharing Platform

Buz is a short video sharing platform inspired by TikTok, allowing users to upload, view, and interact with short-form videos.

## Project Structure

```
buz/
├── web/                   # Web application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── mobile/                # Mobile application
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   └── utils/
│   ├── App.tsx
│   └── package.json
├── server/                # Backend server (to be implemented)
│   └── ...
├── README.md
└── package.json           # Root package.json for managing both web and mobile
```

## Features

### In-feed Advertisements

Buz now supports in-feed advertisements to monetize the platform. Ads are displayed as cards within the video feed, allowing for seamless integration with user content.

### LLM-based Recommendations

An open-source Language Model (LLM) can be used to provide personalized video recommendations. This feature can be toggled on or off using a checkbox in the feed.

## Web Application

The web application is built using React with TypeScript and Vite as the build tool.

### Setup and Running

1. Navigate to the web directory:
   ```
   cd web
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to view the application.

### Building for Production

1. Build the application:
   ```
   npm run build
   ```

2. The built files will be in the `dist` directory, which can be deployed to a static hosting service.

## Mobile Application

The mobile application is built using React Native.

### Setup and Running

1. Navigate to the mobile directory:
   ```
   cd mobile
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. For iOS:
   ```
   npx pod-install ios
   npx react-native run-ios
   ```

4. For Android:
   ```
   npx react-native run-android
   ```

Note: You need to have Xcode (for iOS) or Android Studio (for Android) set up on your machine.

## Authentication

Currently, the authentication is mocked and stored in local storage. To implement real authentication:

1. Set up a backend server with proper authentication endpoints.
2. Update the `src/utils/auth.ts` file in both web and mobile applications to use these endpoints.
3. Implement email verification and password reset functionality on the backend.
4. Update the SignIn and SignUp components to handle these new features.

## API Integration

To connect the applications to a real backend:

1. Set up environment variables for API URLs in both web and mobile apps.
2. Create an API service (e.g., `src/services/api.ts`) to handle all API calls.
3. Update components to use this API service instead of mock data.

## Deployment

### Web Application

1. Build the application as described above.
2. Deploy the contents of the `dist` directory to a static hosting service like Netlify, Vercel, or GitHub Pages.

### Mobile Application

1. For iOS, follow the [official React Native guide](https://reactnative.dev/docs/publishing-to-app-store) to publish to the App Store.
2. For Android, follow the [official React Native guide](https://reactnative.dev/docs/signed-apk-android) to generate a signed APK/App Bundle and publish to the Google Play Store.

### Backend Server

1. Set up a Node.js server (e.g., using Express.js) to handle API requests.
2. Deploy the server to a cloud platform like Heroku, DigitalOcean, or AWS.
3. Update the frontend applications to use the deployed server's URL.

## Testing

### Web Application

1. Run unit tests:
   ```
   npm test
   ```

2. For end-to-end testing, consider setting up Cypress and run:
   ```
   npm run e2e
   ```

### Mobile Application

1. Run unit tests:
   ```
   npm test
   ```

2. For end-to-end testing on mobile, consider using Detox for iOS or Espresso for Android.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.