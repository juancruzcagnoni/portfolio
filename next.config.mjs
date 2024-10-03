/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utgqjhvdibwxpwkiuxnk.supabase.co',
          port: '', // Puedes dejar el puerto vacío si no hay un puerto específico
          pathname: '/storage/v1/object/sign/**', // Ruta para permitir todos los objetos del bucket
        },
      ],
    },
  };
  
  export default nextConfig;
  