import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-start bg-white pl-24">
      <Card className="p-8 shadow-none w-full max-w-md ">
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-3xl font-bold text-[#165a4c] text-center mb-6">Registrarse</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="username">Nombre de usuario:</Label>
          <Input
            type="text"
            name="username"
            placeholder="Escribe tu nombre"
            {...register("username")}
            autoFocus
          />
          {errors.username?.message && (
            <p className="text-red-500">{errors.username?.message}</p>
          )}

          <Label htmlFor="email">Correo Electronico:</Label>
          <Input
            name="email"
            placeholder="ramona@gmail.com"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}

          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}

          <Label htmlFor="confirmPassword">Confirmar Contraseña:</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
          )}
          <Button className="bg-[#165a4c] text-white rounded-lg px-6 py-3 shadow-lg hover:bg-[#144736] transition">
            Registrarse
            </Button>
        </form>

        <p className="mt-4 text-gray-400 text-center">
          Ya tienes una cuenta ?
          <Link className="text-sky-500" to="/login">
            Iniciar sesion 
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;
