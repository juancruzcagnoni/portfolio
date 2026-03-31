const projects = [
  {
    id: '1',
    type: 'playground',
    createdAt: '2025-08-01',
    name: {
      en: 'Habit Tracker',
      es: 'Habit Tracker',
    },
    description: {
      en: 'A beautifully crafted habit tracking app built with React Native, Expo, and Supabase, designed to help users build consistency and stay on track with their personal goals.',
      es: 'Una aplicación de seguimiento de hábitos construida con React Native, Expo y Supabase, diseñada para ayudar a los usuarios a crear constancia y cumplir sus objetivos personales.',
    },
    longDescription: {
      en: `Habit Tracker is a mobile application built with React Native, Expo, and Supabase that helps users create and maintain positive habits. With a clean and intuitive interface, it allows users to set up custom habits, choose their frequency, and visualize progress through a streak chart. The app features real-time state management using Context API, multi-language support, and light/dark modes for a tailored experience. Its backend, powered by Supabase, ensures secure authentication and reliable data sync across devices. This project demonstrates best practices in mobile UX, state management, and scalable integration between frontend and backend technologies.`,
      es: `Habit Tracker es una aplicación móvil desarrollada con React Native, Expo y Supabase para ayudar a los usuarios a crear y sostener hábitos positivos. Cuenta con una interfaz intuitiva que permite configurar hábitos personalizados, definir su frecuencia y ver el progreso mediante un gráfico de rachas. Utiliza Context API para la gestión de estado en tiempo real, soporte multilenguaje y modos claro/oscuro para adaptarse a cada usuario. El backend, implementado con Supabase, brinda autenticación segura y sincronización de datos fiable. Este proyecto aplica buenas prácticas de UX móvil, gestión de estado y una integración escalable entre frontend y backend.`
    },
    status: 'completed',
    techStack: ['React Native', 'Expo', 'Supabase'],
    github: 'https://github.com/juancruzcagnoni/habit-tracker',
    demo: '',
    image: 'habit-tracker.png'
  },
  {
    id: '2',
    type: 'playground',
    createdAt: '2025-08-01',
    name: {
      en: 'Route Map',
      es: 'Route Map',
    },
    description: {
      en: 'A simple and intuitive route planning app built with React Native and Expo, allowing users to search for places, view routes, and estimate travel time by car, bike, or walking.',
      es: 'Aplicación sencilla e intuitiva para planificar rutas en React Native y Expo, donde los usuarios pueden buscar lugares, ver rutas y estimar tiempos en auto, bici o a pie.',
    },
    longDescription: {
      en: `Route Map is a mobile app that simplifies route planning and navigation using React Native and Expo. Users can search for addresses with autocomplete, select travel modes (car, bike, walking), and instantly visualize routes on an interactive map. The application integrates real-time geolocation, external APIs for routing, and animated UI overlays for a seamless experience. Designed with modular React Native components, Route Map offers an efficient and modern approach to building location-based mobile solutions, highlighting integration with third-party services and clean user experience.`,
      es: `Route Map es una aplicación móvil que facilita la planificación de rutas y la navegación mediante React Native y Expo. Permite buscar direcciones con autocompletado, seleccionar el modo de viaje (auto, bici o a pie) y visualizar rutas en un mapa interactivo. Integra geolocalización en tiempo real, APIs externas para cálculo de rutas y overlays animados para una experiencia fluida. Desarrollada con componentes modulares, Route Map es un ejemplo eficiente y moderno de solución mobile basada en ubicación, destacando la integración con servicios externos y una experiencia de usuario cuidada.`
    },
    status: 'completed',
    techStack: ['React Native', 'Expo'],
    github: 'https://github.com/juancruzcagnoni/route-map',
    demo: '',
    image: 'route-map.png'
  }
];

export default projects;
