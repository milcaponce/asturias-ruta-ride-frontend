//Función para registrar usuario
export async function registerUser(userData) {
    const response = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error("Error al registrar usuario");
    }

    return await response.json();
}

//Función para verificar email
export async function verifyEmail(token) {
    const response = await fetch(`http://localhost:8080/api/v1/auth/verify?token=${encodeURIComponent(token)}`);

    if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(text || "No se pudo verificar el correo");
    }

    return await response.text(); 
}