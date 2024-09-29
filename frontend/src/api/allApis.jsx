




export const Profile = async (token) => {


    try {


        const response = await fetch("http://localhost:1234/auth/me", {
            method: "GET",
            headers: {
                // "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },

        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            return;
        }

        const dataa = await response.json();
        console.log("User Profile:", dataa);
        return dataa;


    } catch (err) {
        console.log(err);
    }
};


export const CreateProject = async (data, token) => {


    try {


        const response = await fetch("http://localhost:1234/Projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify(
                data
            ),

        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            return;
        }

        const dataa = await response.json(); // Handle the success response from your API
        console.log("Project created:", dataa);

        return dataa;


    } catch (err) {
        console.log(err);
    }
};


export const UserProjects = async (token) => {


    try {


        const response = await fetch("http://localhost:1234/Projects/myProject", {
            method: "GET",
            headers: {
                // "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },

        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            return;
        }

        const dataa = await response.json();
        console.log("User Projects:", dataa);
        return dataa;


    } catch (err) {
        console.log(err);
    }
};


export const AllUsers = async () => {


    try {


        const response = await fetch("http://localhost:1234/users/allUsers", {
            method: "GET",


        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            return;
        }

        const dataa = await response.json();
        console.log("All Users :", dataa);
        return dataa;


    } catch (err) {
        console.log(err);
    }
};


export const CreateTask = async (data, token) => {


    try {


        const response = await fetch("http://localhost:1234/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify(
                data
            ),

        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            return;
        }

        const dataa = await response.json(); // Handle the success response from your API
        console.log("Task created:", dataa);

        return dataa;


    } catch (err) {
        console.log(err);
    }
};
export const UpdateTask = async (id, data, token) => {


    try {


        const response = await fetch("http://localhost:1234/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify(
                data
            ),

        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            return;
        }

        const dataa = await response.json(); // Handle the success response from your API
        console.log("Task created:", dataa);

        return dataa;


    } catch (err) {
        console.log(err);
    }
};
