# App Móvil de Recetas y Planificador de Comidas — Recuperación de Módulo

## Descripción

Aplicación móvil desarrollada con React Native y TypeScript que permite a los usuarios buscar recetas, gestionar favoritos y planificar comidas semanales. Este proyecto forma parte de la recuperación del módulo de Técnico en Desarrollo de Software, implementando una solución completa que integra consumo de APIs externas, persistencia local de datos y una interfaz de usuario intuitiva.

La aplicación utiliza la API de Spoonacular para obtener información detallada de recetas, incluyendo ingredientes, instrucciones de preparación, tiempos de cocción y valores nutricionales, proporcionando una experiencia completa para la planificación culinaria.

## Objetivos del Proyecto

- Desarrollar una aplicación móvil multiplataforma utilizando React Native CLI y TypeScript
- Implementar un sistema de navegación intuitivo con pestañas y navegación por stack
- Integrar servicios externos mediante el consumo de APIs REST (Spoonacular API)
- Gestionar el estado global de la aplicación utilizando React Context
- Implementar persistencia local de datos con AsyncStorage
- Crear una interfaz de usuario responsive y accesible con React Native Paper
- Aplicar patrones de arquitectura limpia y buenas prácticas de desarrollo
- Desarrollar funcionalidades offline básicas para mejorar la experiencia del usuario

## Funcionalidades Principales

### MVP (Producto Mínimo Viable)

- **Pantalla de Inicio con Búsqueda**: Búsqueda de recetas por nombre y visualización de recetas aleatorias
- **Detalle de Receta**: Información completa incluyendo ingredientes, instrucciones, tiempo de preparación y porciones
- **Sistema de Favoritos**: Guardar y gestionar recetas favoritas con persistencia local
- **Planificador Semanal**: Organización de comidas por días de la semana utilizando recetas favoritas
- **Persistencia Local**: Almacenamiento offline de favoritos y planificación semanal
- **Funcionalidad Offline Básica**: Acceso a datos guardados sin conexión a internet

### Funcionalidades Adicionales

- Interfaz de usuario moderna con Material Design
- Navegación fluida entre pantallas
- Gestión de estados de carga y error
- Optimización de imágenes y rendimiento
- Validación de formularios y entrada de datos

## Stack Tecnológico

### Framework y Lenguajes
- **React Native CLI** - Framework de desarrollo móvil multiplataforma
- **TypeScript** - Superset de JavaScript con tipado estático
- **JavaScript ES6+** - Lenguaje base con características modernas

### Navegación y UI
- **@react-navigation/native** - Sistema de navegación principal
- **@react-navigation/stack** - Navegación por stack
- **@react-navigation/bottom-tabs** - Navegación por pestañas
- **React Native Paper** - Biblioteca de componentes UI con Material Design
- **React Native Vector Icons** - Iconografía vectorial
- **React Native Safe Area Context** - Manejo de áreas seguras

### Gestión de Estado y Datos
- **React Context API** - Gestión de estado global
- **@react-native-async-storage/async-storage** - Persistencia local de datos
- **Axios** - Cliente HTTP para consumo de APIs

### APIs y Servicios
- **Spoonacular API** - API externa para información de recetas
- **React Native Dotenv** - Gestión de variables de entorno

### Herramientas de Desarrollo
- **Metro** - Bundler de React Native
- **Babel** - Transpilador de JavaScript
- **ESLint** - Linter de código
- **Jest** - Framework de testing
- **React Native Gesture Handler** - Manejo de gestos

## Estructura del Repositorio

```
recipe-app/
├── src/
│   ├── components/
│   │   ├── DayPlanner.tsx
│   │   ├── RecipeCard.tsx
│   │   ├── RecipeItem.tsx
│   │   └── SearchBar.tsx
│   ├── context/
│   │   ├── FavoritesContext.tsx
│   │   └── PlannerContext.tsx
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── screens/
│   │   ├── FavoritesScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── PlannerScreen.tsx
│   │   └── RecipeDetailScreen.tsx
│   ├── services/
│   │   ├── api.ts
│   │   └── storage.ts
│   └── types/
│       ├── index.ts
│       └── env.d.ts
├── android/
├── ios/
├── App.tsx
├── index.js
├── package.json
├── tsconfig.json
├── babel.config.js
├── metro.config.js
├── jest.config.js
├── .env.example
├── .gitignore
└── README.md
```

## Requisitos Previos

### Software Necesario
- **Node.js** (versión 16 o superior)
- **npm** o **yarn** (gestor de paquetes)
- **React Native CLI** instalado globalmente
- **Android Studio** (para desarrollo Android)
- **Xcode** (para desarrollo iOS - solo macOS)
- **Java Development Kit (JDK)** versión 11 o superior

### Configuración del Entorno
- **Android SDK** configurado correctamente
- **Emulador Android** o dispositivo físico para pruebas
- **Simulador iOS** (solo macOS) o dispositivo físico
- **Variables de entorno** configuradas (ANDROID_HOME, PATH)

### Cuenta de API
- Cuenta gratuita en [Spoonacular](https://spoonacular.com/food-api) para obtener API Key

## Instalación y Configuración

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/recipe-app.git
cd recipe-app
```

### 2. Instalar Dependencias
```bash
npm install
# o alternativamente
yarn install
```

### 3. Configurar Variables de Entorno
```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar el archivo .env y agregar tu API Key
SPOONACULAR_API_KEY=tu_api_key_de_spoonacular_aqui
```

### 4. Configurar Android (si es necesario)
```bash
# Verificar configuración de Android
npx react-native doctor

# Si hay problemas, seguir las instrucciones mostradas
```

### 5. Instalar Dependencias iOS (solo macOS)
```bash
cd ios
pod install
cd ..
```

## Cómo Ejecutar la Aplicación

### Iniciar Metro Bundler
```bash
npm start
# o
yarn start
```

### Ejecutar en Android
```bash
# Con emulador Android ejecutándose
npm run android

# o con yarn
yarn android

# Para dispositivo específico
npx react-native run-android --deviceId=DEVICE_ID
```

### Ejecutar en iOS (solo macOS)
```bash
# Con simulador iOS
npm run ios

# o con yarn
yarn ios

# Para simulador específico
npx react-native run-ios --simulator="iPhone 14"
```

### Comandos de Desarrollo Adicionales
```bash
# Limpiar caché de Metro
npm start -- --reset-cache

# Ejecutar tests
npm test

# Linting del código
npm run lint
```

## Cómo Generar el APK

### APK de Debug
```bash
cd android
./gradlew assembleDebug
# El APK se genera en: android/app/build/outputs/apk/debug/
```

### APK de Release
```bash
# Generar keystore (solo la primera vez)
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

# Configurar gradle.properties con las credenciales del keystore
# Luego generar el APK
cd android
./gradlew assembleRelease
# El APK se genera en: android/app/build/outputs/apk/release/
```

### Bundle de Release (recomendado para Play Store)
```bash
cd android
./gradlew bundleRelease
# El bundle se genera en: android/app/build/outputs/bundle/release/
```

## Entregables Incluidos

Este proyecto de recuperación incluye los siguientes entregables:

- **Código Fuente Completo**: Aplicación React Native con TypeScript completamente funcional
- **Documentación Técnica**: README detallado con instrucciones de instalación y uso
- **Video Demostración**: Grabación mostrando todas las funcionalidades implementadas
- **APK de Prueba**: Archivo de instalación para dispositivos Android
- **Documento de Arquitectura**: Explicación de patrones y decisiones técnicas implementadas
- **Manual de Usuario**: Guía de uso de la aplicación para usuarios finales
- **Casos de Prueba**: Documentación de testing y validación de funcionalidades

## Capturas de Pantalla

### Pantalla de Inicio
![Pantalla de Inicio](./screenshots/home-screen.png)
*Búsqueda de recetas y visualización de recetas aleatorias*

### Detalle de Receta
![Detalle de Receta](./screenshots/recipe-detail.png)
*Información completa de la receta con ingredientes e instrucciones*

### Pantalla de Favoritos
![Favoritos](./screenshots/favorites-screen.png)
*Gestión de recetas guardadas como favoritas*

### Planificador Semanal
![Planificador](./screenshots/planner-screen.png)
*Organización de comidas por días de la semana*

### Navegación por Pestañas
![Navegación](./screenshots/tab-navigation.png)
*Sistema de navegación intuitivo con pestañas inferiores*

## Autor

**[Tu Nombre Completo]**
- Estudiante de Técnico en Desarrollo de Software
- Proyecto de Recuperación de Módulo
- Contacto: [tu-email@ejemplo.com]
- GitHub: [https://github.com/tu-usuario]

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

*Proyecto desarrollado como parte de la recuperación del módulo de Técnico en Desarrollo de Software. Implementa las mejores prácticas de desarrollo móvil con React Native y TypeScript.*