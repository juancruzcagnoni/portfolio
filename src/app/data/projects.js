const projects = [
  {
    id: '1',
    type: 'playground',
    createdAt: '2025-04-01',
    name: {
      en: 'Component Renderer',
      es: 'Component Renderer',
    },
    description: {
      en: 'A tool to generate UI components like buttons, accordions, and dialogs. Provides preview and customizable options.',
      es: 'Una herramienta para generar componentes de interfaz de usuario como botones, acordeones y diálogos. Ofrece vista previa y opciones personalizables.',
    },
    longDescription: {
      en: 'Component Renderer is an innovative tool designed for developers who want to create UI components quickly and efficiently. This tool allows users to generate JavaScript-based components such as buttons, accordions, and dialogs with customizable options. The generated code can be copied and used directly in any project, saving time and effort. Users can also preview the components in real time, making it easy to see changes instantly. The tool is ideal for both beginners and experienced developers looking for a fast way to prototype UI elements.',
      es: 'Component Renderer es una herramienta innovadora diseñada para desarrolladores que desean crear componentes de interfaz de usuario de forma rápida y eficiente. Esta herramienta permite generar componentes basados ​​en JavaScript, como botones, acordeones y cuadros de diálogo con opciones personalizables. El código generado se puede copiar y utilizar directamente en cualquier proyecto, ahorrando tiempo y esfuerzo. Además, se puede previsualizar los componentes en tiempo real, lo que facilita la visualización instantánea de los cambios. Es ideal tanto para principiantes como para desarrolladores experimentados que buscan una forma rápida de prototipar elementos de interfaz de usuario.',
    },
    status: 'completed',
    techStack: ['React', 'Tailwind CSS'],
    github: 'https://github.com/juancruzcagnoni/component-renderer',
    demo: 'https://renderer-component.vercel.app/',
    image: 'renderer-component.png'
  },
  {
    id: '2',
    type: 'playground',
    createdAt: '2025-04-01',
    name: {
      en: 'Avatar Generator',
      es: 'Avatar Generator',
    },
    description: {
      en: "Generates an avatar based on the user's initials. Provides random colors and SVG download option.",
      es: 'Genera un avatar basado en las iniciales del usuario. Ofrece colores aleatorios y la opción de descargar SVG.',
    },
    longDescription: {
      en: "Avatar Generator is a simple yet powerful tool that creates unique avatars based on a user's name and surname initials. When a user enters their name, the generator produces a stylish logo featuring their initials, randomly selecting a color scheme for uniqueness. The avatar can be downloaded as an SVG file, making it easy to use in various applications such as social media, profile pictures, or branding. With its minimalist design and automatic color variations, this tool is perfect for users who want a quick and professional-looking avatar without the need for design skills.",
      es: 'El Generador de Avatares es una herramienta sencilla pero potente que crea avatares únicos basados ​​en las iniciales del nombre y apellido del usuario. Al introducir su nombre, el generador genera un elegante logotipo con sus iniciales, seleccionando aleatoriamente una paleta de colores para mayor singularidad. El avatar se puede descargar como archivo SVG, lo que facilita su uso en diversas aplicaciones, como redes sociales, fotos de perfil o branding. Con su diseño minimalista y variaciones de color automáticas, esta herramienta es perfecta para quienes buscan un avatar rápido y de aspecto profesional sin necesidad de conocimientos de diseño.',
    },
    status: 'in-progress',
    techStack: ['Typescript'],
    github: 'https://github.com/juancruzcagnoni/avatar-generator',
    demo: 'https://avatar-generator-alpha.vercel.app/',
    image: 'avatar-generator.png'
  },
  {
    id: '3',
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
    id: '4',
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
  },
  {
    id: '5',
    type: 'project',
    createdAt: '2025-08-01',
    name: {
      en: 'TEAYUDA',
      es: 'TEAYUDA',
    },
    description: {
      en: 'A mobile app designed to support communication, relaxation, and professional follow-up for children and adolescents with Autism Spectrum Disorder (ASD).',
      es: 'Aplicación móvil diseñada para facilitar la comunicación, la relajación y el seguimiento profesional de niños, niñas y adolescentes con Trastorno del Espectro Autista (TEA).',
    },
    longDescription: {
      en: `TEAYUDA is a mobile application focused on enhancing the quality of life for children and adolescents with Autism Spectrum Disorder (ASD) in Argentina and Latin America. The app offers three main features: a communication board with pictograms and audio for augmentative communication, a library of relaxation and meditation audios, and a professional follow-up section where caregivers can request reports and professionals can create, store, and share progress notes. TEAYUDA was developed with an inclusive, accessible, and locally-relevant design, aiming to foster collaboration among families, therapists, and institutions. Its visual identity highlights optimism and generosity, reflected in its color palette and approachable UI.`,
      es: `TEAYUDA es una aplicación móvil orientada a mejorar la calidad de vida de niños, niñas y adolescentes con Trastorno del Espectro Autista (TEA) en Argentina y Latinoamérica. Ofrece tres funcionalidades principales: una botonera de comunicación con pictogramas y audio para comunicación aumentativa, una biblioteca de audios de relajación y meditación, y una sección de seguimiento profesional donde los tutores pueden solicitar informes y los profesionales pueden crearlos, almacenarlos y compartir el progreso. TEAYUDA fue desarrollada con un diseño inclusivo, accesible y adaptado a la realidad local, buscando fomentar la colaboración entre familias, terapeutas e instituciones. Su identidad visual transmite optimismo y generosidad, reflejados en su paleta de colores y en una interfaz amigable.`
    },
    status: 'in-progress',
    techStack: ['React Native', 'Expo', 'Supabase'],
    github: '', // Puedes agregar el link cuando lo tengas
    demo: '',   // Puedes agregar el link cuando lo tengas
    image: 'teayuda.png'
  }
];

export default projects;
