export async function fetchRoutes() {
    
    const apiUrl = "http://localhost:8080/api/v1/routes";
    console.log("🔍 Fetching routes from:", apiUrl);

    try {
        // const response = await fetch(apiUrl, {
        //     headers: {
        //         'Authorization': 'Basic ' + btoa('myuser:secret')
        //     }
        // }); 

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching routes: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in fetchRoutes:", error);
        return [];
    }
}

    export async function fetchRouteById(id) {
        const apiUrl = `http://localhost:8080/api/v1/routes/${id}`;
        console.log("🔍 Fetching route by id from:", apiUrl);

        try {
            // para autenticación básica:
            // const response = await fetch(apiUrl, {
            //     headers: {
            //         'Authorization': 'Basic ' + btoa('myuser:secret')
            //     }
            // });

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching route by id: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in fetchRouteById:", error);
        return null;
    }
}