export async function fetchRoutes() {
    
    const apiUrl = "http://localhost:8080/api/v1/routes";
    console.log("🔍 Fetching routes from:", apiUrl);

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': 'Basic ' + btoa('myuser:secret')
            }
        }); 
        if (!response.ok) {
            throw new Error(`Error fetching routes: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
    console.error("Error in fetchRoutes:", error);
        return [];
    }
}