# App Móvil de Recetas y Planificador de Comidas

Aplicación móvil multiplataforma desarrollada con React Native CLI + TypeScript que permite buscar recetas, ver detalles, guardar favoritos, crear un plan semanal de comidas y almacenar datos localmente. El proyecto integra consumo de APIs, almacenamiento local, navegación, diseño UX/UI, pruebas y despliegue básico. Es una app de recetas/planificación alimentaria pensada para uso real.

**Proyecto de recuperación del módulo Técnico en Desarrollo de Software.**

## Características principales

- **Pantalla Home**: listado de recetas con paginación o búsqueda.
- **Búsqueda por ingrediente/nombre**.
- **Detalle de receta**: ingredientes, pasos, tiempo, imágenes.
- **Favoritos**: marcar/desmarcar recetas (persistencia local con AsyncStorage).
- **Planificador semanal**: asignar recetas a días (guardar localmente).
- **Offline**: ver recetas guardadas sin conexión.
- **(Opcional) Autenticación básica** (registro/login) — no implementada para priorizar MVP.

## Tecnologías utilizadas (Stack sugerido y usado)

- **React Native (CLI)** con TypeScript.
- **Navegación**: @react-navigation/native (Bottom Tabs + Stack Navigator).
- **Estado**: React Context + hooks (FavoritesContext y PlannerContext).
- **Almacenamiento local**: @react-native-async-storage/async-storage.
- **Consumo API**: Axios (integrado con Spoonacular API).
- **UI**: React Native Paper para componentes Material Design.
- **Variables de entorno**: react-native-dotenv (.env.example incluido).
- **Prototipado**: Figma (opcional, no incluido en repo).

## Requisitos previos

- Node.js ≥ 18.
- npm o yarn.
- Android Studio (para emulador y SDK) o dispositivo Android con modo desarrollador.
- Java JDK 17 o superior (para builds Android).
- Cuenta en Spoonacular API (clave gratuita en .env).

## Cómo ejecutar la aplicación

### Clonar el repositorio
```bash
git clone https://github.com/Santiago04-C/Recuperaci-n-App-Recetas.git
cd Recuperaci-n-App-Recetas
```

### Instalar dependencias
```bash
npm install
# o con yarn
# yarn install
```

### Configurar variables de entorno
Copia el archivo de ejemplo y agrega tu clave API de Spoonacular:
```bash
cp .env.example .env
```
Edita .env con tu clave (ej. SPOONACULAR_API_KEY=tu-clave).

### Iniciar el emulador Android
(desde Android Studio) o conecta un dispositivo Android con USB debugging activado.

### Ejecutar la aplicación
Inicia el Metro bundler:
```bash
npx react-native start
```

En otra terminal, compila y ejecuta en Android:
```bash
npx react-native run-android
```

La app se instalará y abrirá automáticamente en el emulador o dispositivo.

## Cómo generar el APK (para Android)

### 1. Configura el keystore (clave de firma) en la raíz del proyecto:
```bash
keytool -genkeypair -v -keystore my-release-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
```
(Sigue las instrucciones para contraseña y datos).

### 2. Mueve my-release-key.keystore a android/app/.

### 3. Edita android/gradle.properties con tus contraseñas:
```text
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=tu_contraseña
MYAPP_RELEASE_KEY_PASSWORD=tu_contraseña
```

### 4. Agrega configuración en android/app/build.gradle (dentro de android { ... }):
```text
signingConfigs {
    release {
        storeFile file(MYAPP_RELEASE_STORE_FILE)
        storePassword MYAPP_RELEASE_STORE_PASSWORD
        keyAlias MYAPP_RELEASE_KEY_ALIAS
        keyPassword MYAPP_RELEASE_KEY_PASSWORD
    }
}

buildTypes {
    release {
        signingConfig signingConfigs.release
    }
}
```

### 5. Genera el APK:
```bash
cd android
./gradlew assembleRelease
```

El APK estará en `android/app/build/outputs/apk/release/app-release.apk`.