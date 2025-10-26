import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        } = useForm();

        const [message, setMessage] = useState(null);
        const [loading, setLoading] = useState(false);
        const password = watch("password");

        const onSubmit = async (data) => {
            setLoading(true);
            setMessage(null);

            try {
                const response = await fetch("http://localhost:8080/api/v1/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: data.name,
                        email: data.email,
                        password: data.password,
                        phoneNumber: data.phone || null,
                        profileImageUrl: data.profileImage || null,
                    }),
                });

                if (!response.ok) {
                    throw new Error("Error al registrar usuario");
                }

                setMessage({
                    type: "success",
                    text: "Registro exitoso. Verifica tu correo electrónico antes de iniciar sesión.",
                });
                reset();
                } catch (err) {
                setMessage({ type: "error", text: err.message });
                } finally {
                setLoading(false);
            }
        };

        return (
            <div className="flex justify-center items-center min-h-screen bg-backgroundLight px-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
                    <h1 className="text-3xl font-bold text-center text-brandDarkGreen mb-6">
                    Crear cuenta
                    </h1>

                {message && (
                    <div
                        className={`text-center mb-4 p-3 rounded-lg ${
                        message.type === "success"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-700"
                    }`}>
                    {message.text}
                    </div>
                )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Nombre */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                             Nombre completo *
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: "El nombre es obligatorio" })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brandGreen outline-none"
                            />
                            {errors.name && (
                                <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

          {/* Apellidos */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Apellidos
                            </label>
                            <input
                                type="text"
                                {...register("surname")}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brandGreen outline-none"
                            />
                        </div>

          {/* Teléfono */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Teléfono
                            </label>
                            <input
                                type="tel"
                                {...register("phone", {
                                    pattern: {
                                        value: /^[0-9]{9}$/,
                                        message: "Debe tener 9 dígitos",
                                    },
                                })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brandGreen outline-none"
                            />
                            {errors.phone && (
                                <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                            )}
                        </div>

          {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Correo electrónico *
                            </label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "El email es obligatorio",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Formato de email no válido",
                                    },
                                })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brandGreen outline-none"
                                />
                                {errors.email && (
                                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                                )}
                        </div>

          {/* Contraseña */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Contraseña *
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "La contraseña es obligatoria",
                                    minLength: {
                                        value: 8,
                                        message: "Debe tener al menos 8 caracteres",
                                    },
                                })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brandGreen outline-none"
                                />
                                {errors.password && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.password.message}
                                    </p>
                                )}
                        </div>

          {/* Repetir contraseña */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Repetir contraseña *
                            </label>
                            <input
                                type="password"
                                {...register("confirmPassword", {
                                    required: "Debes confirmar tu contraseña",
                                    validate: (value) =>
                                    value === password || "Las contraseñas no coinciden",
                                })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brandGreen outline-none"
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

          {/* Imagen de perfil */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Foto de perfil (URL) *
                            </label>
                            <input
                                type="url"
                                {...register("profileImage", {
                                    required: "La imagen es obligatoria",
                                })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brandGreen outline-none"
                            />
                            {errors.profileImage && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.profileImage.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full mt-4"
                        >
                            {loading ? "Registrando..." : "Registrarse"}
                        </button>
                    </form>
                </div>
            </div>
        );
    }