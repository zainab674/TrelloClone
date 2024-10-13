
export const UpdateUser = async (data, token) => {


    try {


        const response = await fetch(`http://localhost:1234/users/update`, {
            method: "PUT",
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
        console.log("User Updated:", dataa);

        return dataa;


    } catch (err) {
        console.log(err);
    }
};



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
export const DeleteProject = async (id, token) => {
    try {
        console.log("Authorization Token: ", token); // Log the token

        const response = await fetch(`http://localhost:1234/auth/deleteProject/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}` // Ensure "Authorization" is correctly capitalized
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error deleting project:", errorData); // Log error details
            return;
        }

        const data = await response.json();
        console.log("Deleted project:", data);
        return data;

    } catch (err) {
        console.error("Error in DeleteProject:", err); // Log the error
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
export const UpdateProject = async (id, data, token) => {


    try {


        const response = await fetch(`http://localhost:1234/Projects/${id}`, {
            method: "PUT",
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
export const ProjectMembers = async (id, token) => {


    try {


        const response = await fetch(`http://localhost:1234/Projects/getMembers/${id}`, {
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
        console.log(" Project members:", dataa);
        return dataa;


    } catch (err) {
        console.log(err);
    }
};
export const ProjectDetail = async (id, token) => {


    try {


        const response = await fetch(`http://localhost:1234/Projects/details/${id}`, {
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
        console.log(" Project Details:", dataa);
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
    console.log("sending this", data)

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


        const response = await fetch(`http://localhost:1234/tasks/${id}`, {
            method: "PUT",
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
        console.log("Task updated:", dataa);

        return dataa;


    } catch (err) {
        console.log(err);
    }
};
export const DeleteTask = async (id, token) => {


    try {


        const response = await fetch(`http://localhost:1234/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },


        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            return;
        }

        const dataa = await response.json(); // Handle the success response from your API
        console.log("Task deleted:");

        // return dataa;


    } catch (err) {
        console.log(err);
    }
};


export const GetTasks = async (id) => {


    try {


        const response = await fetch(`http://localhost:1234/tasks/project/${id}`, {
            method: "GET",
            headers: {

            },


        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            return;
        }

        const dataa = await response.json(); // Handle the success response from your API
        console.log("Tasks fetched:", dataa);

        return dataa;


    } catch (err) {
        console.log(err);
    }
};




