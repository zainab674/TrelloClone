










const getErrorMessage = (errorCode) => {
    console.log(errorCode)
    switch (errorCode) {
        case "auth/invalid-email":
            return "Invalid email address format.";
        case "auth/email-already-in-use":
            return "This email is already in use. Login please";
        case "auth/weak-password":
            return "The password is too weak. Use at least 6 characters.";
        case "auth/missing-password":
            return "Please enter a password.";
        case "auth/user-not-found":
            return "User not found. Please sign up first.";
        case "auth/wrong-password":
            return "Incorrect password. Please try again.";
        case "auth/invalid-credential":
            return "Incorrect Credentials.";
        default:
            return "An error occurred. Please try again.";
    }
}

export const Signin = async (name, email, password, setError) => {
    if (!name || !email || !password) {
        setError = "Please enter all required fields.";
        return;
    }

    try {



        const response = await fetch("http://localhost:1234/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                displayName: name,
                email: email,
                password: password,

                photoURL: "",
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            setError = errorData.message || "An error occurred during registration.";
            return;
        }

        const dataa = await response.json(); // Handle the success response from your API
        console.log("User registered successfully:", dataa);

    }
    catch (err) {
        setError = getErrorMessage(err.code);
    }

}

export const Login = async (email, password, setError) => {
    if (!email || !password) {
        setError = "Please enter all required fields.";
        return;
    }

    try {
        // Check if the user exists

        const response = await fetch("http://localhost:1234/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

                email: email,
                password: password,

            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            setError = errorData.message || "An error occurred during login.";
            return;
        }

        const dataa = await response.json(); // Handle the success response from your API
        console.log("User login successfully:", dataa);
        localStorage.setItem('accessToken', dataa.accessToken);
        return dataa.accessToken;


    } catch (err) {
        setError = getErrorMessage(err.code);
    }
};
