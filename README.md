# **🌶️ Order Food Online 🌟**

A Swiggy-inspired web application designed to provide a seamless and engaging food ordering experience.

---

## **✨ Features**

-   🔐 **Authentication**: Secure Google Login using Firebase Authentication.
-   🥗 **Real-Time API Integration**: Access Swiggy’s live data to explore restaurants, menus, and dishes.
-   🛒 **Cart Functionality**: Add, update, or delete food items in a dynamic cart.
-   ✅ **Checkout System**: A user-friendly checkout page for order management.
-   💳 **Payment Integration**: Razorpay integration (frontend) for smooth payment processing.
-   🛠️ **Proxy Middleware**: Custom middleware to bypass CORS issues with Swiggy’s API.

---

## **🛠️ Tech Stack**

-   **Frontend**:

    -   ⚛️ **React.js**: Responsive and interactive user interface.
    -   📦 **Redux**: State management for efficient data flow.
    -   🎨 **ShadCN UI**: Sleek and modern UI components for accessibility and consistency.
    -   🌈 **Tailwind CSS**: Highly customizable styling with a modern design approach.

-   **Middleware for CORS**:

    -   🌐 **CORS Bypass**: Implemented via a custom proxy middleware.
   

-   **Authentication**:

    -   🔑 **Firebase Authentication**: Secure Google login for user authentication.

-   **Payment**:
    -   💸 **Razorpay Integration (Frontend)**: Simplifies payment handling on the user side.

---

## **📋 How to Run the Project**

### **🔧 Prerequisites**

-   🖥️ Node.js and npm installed.
-   🔥 Firebase project set up with Google Authentication enabled.
-   💳 Razorpay account for payment integration.

### **⚙️ Steps to Install and Run Locally**

1. **📂 Clone the Repository**

    ```bash
    git clone https://github.com/JhansiVasireddy/Order-Food_Online.git
    cd Order-Food_Online
    ```

2. **📦 Install Dependencies**

    ```bash
    npm install
    ```

3. **📝 Set Up Environment Variables**  
   Create a `.env` file in the root directory with the following variables:
   Create a Firebase Project and get the API,ID etc.
   create Test Razorpay Keys 

    ```env
        VITE_FIREBASE_API=<your-firebase-api-key>
        VITE_FIREBASE_AUTHDOMAIN=<your-firebase-auth-domain>
        VITE_PROJECT_ID=<your-firebase-project-id>
        VITE_STORAGE_BUCKET=<your-firebase-storage-bucket>
        VITE_MESS_SEND_ID=<your-firebase-messaging-sender-id>
        VITE_APP_ID=<your-firebase-app-id>
        VITE_RAZORPAY_KEY_ID=<your-razorpay-key-id>
        VITE_RAZORPAY_KEY_SECRET=<your-razorpay-key-secret>
        VITE_BASE_URL=<your-proxy-middleware-base-url>
    ```

5. **▶️ Start the Development Server**

    ```bash
    npm run dev
    ```

6. **🌐 Access the Application**  
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## **🌟 Future Enhancements**

-   🗃️ Backend integration for storing orders and user history.
-   🔍 Enhanced search and filtering options for restaurants and dishes.
-   📡 Real-time order tracking.

---

## **🤝 Contributing**

Contributions are welcome! To contribute:

1. 🍴 Fork the repository.
2. 🔀 Create a feature branch:
    ```bash
    git checkout -b feature-name
    ```
3. 💾 Commit your changes:
    ```bash
    git commit -m "Add feature-name"
    ```
4. 📤 Push the branch and create a pull request.

---

---

## **📞 Contact**

For queries, feedback, or suggestions, feel free to reach out:

-   📧 **Email**: [JhansiVasireddy250@gmail.com](mailto:JhansiVasireddy250@gmail.com)
-   🐙 **GitHub**: (https://github.com/JhansiVasireddy)

---

Elevate your food ordering experience with **🌶️ Order Food Online**! 🍽️
"# Order-Food-Online" 
