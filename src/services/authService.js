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
    export async function loginRequest(credentials) {
    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        const errorMsg = response.status === 403
            ? "Cuenta no verificada"
            : "Credenciales inválidas";
        throw new Error(errorMsg);
    }

    return await response.json();
}
