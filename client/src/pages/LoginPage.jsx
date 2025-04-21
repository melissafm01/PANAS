import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-start bg-white  pl-24">
      <Card className="p-8 shadow-none w-full max-w-md ">
        <h1 className="text-2xl font-bold text-[#165a4c] text-center mb-6">Inicia sesion</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Correo Electronico"
            className="bg-[#dde6e2] rounded-lg px-4 py-3 placeholder-gray-400 border-none focus:ring-2 focus:ring-[#165a4c]"
            {...register("email", { required: true})}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <Input
            type="password"
            placeholder="contraseña"
            className="bg-[#dde6e2] rounded-lg px-4 py-3 placeholder-gray-400 border-none focus:ring-2 focus:ring-[#165a4c]"
            {...register("password", { required: true, minLength: 6  })}
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          <Button className="bg-[#165a4c] text-white rounded-lg px-6 py-3 shadow-lg hover:bg-[#144736] transition">
            Iniciar sesion
          </Button>
        </form>

        <p className="mt-4 text-gray-400 text-center">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Regístrate
          </Link>
        </p>

        {loginErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
      </Card>
    </div>
  );
}