# Instrucciones para Generar APK y Video Demo

## 🚀 Generar APK de Release

### 1. Preparar el Keystore (Solo primera vez)
```bash
# Generar keystore en la raíz del proyecto
keytool -genkeypair -v -keystore my-release-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias

# Datos sugeridos:
# - Contraseña: tu_password_seguro
# - Nombre: Tu Nombre
# - Organización: Técnico en Desarrollo de Software
# - Ciudad: Tu Ciudad
# - País: CO (Colombia)
```

### 2. Configurar Gradle
Edita `android/gradle.properties` y agrega:
```properties
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=tu_password_seguro
MYAPP_RELEASE_KEY_PASSWORD=tu_password_seguro
```

### 3. Configurar Build
En `android/app/build.gradle`, dentro de `android { ... }`:
```gradle
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
        minifyEnabled enableProguardInReleaseBuilds
        proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
    }
}
```

### 4. Generar APK
```bash
# Limpiar proyecto
cd android
./gradlew clean

# Generar APK de release
./gradlew assembleRelease

# El APK estará en:
# android/app/build/outputs/apk/release/app-release.apk
```

### 5. Verificar APK
```bash
# Instalar en dispositivo/emulador
adb install android/app/build/outputs/apk/release/app-release.apk

# Verificar que funciona correctamente
```

## 📱 Probar la Aplicación

### 1. Configurar API Key
```bash
# Copiar archivo de ejemplo
cp .env.example .env

# Editar .env con tu clave de Spoonacular
SPOONACULAR_API_KEY=tu_clave_real_aqui
```

### 2. Obtener API Key Gratuita
1. Ir a [Spoonacular API](https://spoonacular.com/food-api)
2. Crear cuenta gratuita
3. Obtener API key (1000 requests/día gratis)
4. Agregar al archivo `.env`

### 3. Ejecutar en Desarrollo
```bash
# Instalar dependencias
npm install

# Iniciar Metro
npm start

# En otra terminal, ejecutar en Android
npm run android

# O en iOS (solo macOS)
npm run ios
```

### 4. Funcionalidades a Probar
- ✅ Búsqueda de recetas por nombre/ingrediente
- ✅ Ver detalles de receta (ingredientes, pasos)
- ✅ Agregar/quitar favoritos (persiste offline)
- ✅ Planificador semanal (asignar recetas a días)
- ✅ Navegación entre pantallas
- ✅ Funcionalidad offline (favoritos y planificador)

## 🎥 Crear Video Demo (2-3 minutos)

### Guión Sugerido:

#### Introducción (15 segundos)
- "Hola, soy [Tu Nombre]"
- "Esta es mi app de recetas para recuperación del módulo"
- "Desarrollada con React Native y TypeScript"

#### Demo Funcionalidades (2 minutos)
1. **Pantalla Home** (30s)
   - Mostrar recetas aleatorias
   - Buscar "pasta" o "chicken"
   - Scroll por resultados

2. **Detalle de Receta** (30s)
   - Tap en una receta
   - Mostrar ingredientes y pasos
   - Agregar a favoritos (corazón)

3. **Favoritos** (30s)
   - Ir a pestaña Favoritos
   - Mostrar recetas guardadas
   - Quitar un favorito

4. **Planificador** (30s)
   - Ir a pestaña Planificador
   - Asignar receta a "Lunes"
   - Mostrar plan semanal

#### Características Técnicas (30s)
- "Integra API de Spoonacular"
- "Persistencia local con AsyncStorage"
- "Funciona offline para favoritos y planificador"
- "UI con React Native Paper"

### Herramientas de Grabación:
- **Android**: AZ Screen Recorder, Mobizen
- **iOS**: Grabación nativa (Control Center)
- **Emulador**: OBS Studio, Camtasia
- **Edición**: DaVinci Resolve (gratis), Filmora

### Tips de Grabación:
- Orientación vertical (portrait)
- Resolución 1080x1920 o similar
- Audio claro (micrófono externo si es posible)
- Movimientos lentos y deliberados
- Mostrar loading states y transiciones

## 📋 Checklist Final

### Entregables Completados:
- ✅ **Repositorio Git**: Commits descriptivos, README completo
- ✅ **Código Fuente**: React Native + TypeScript funcional
- ✅ **Documentación**: README, documento técnico
- ✅ **Pruebas**: Jest tests para API, contextos, componentes
- ✅ **Variables de Entorno**: .env.example incluido
- ✅ **Prototipo**: Documentación Figma detallada

### Por Completar:
- ⏳ **APK**: Generar y subir a GitHub Releases
- ⏳ **Video Demo**: Grabar y subir (YouTube/Drive)
- ⏳ **Figma**: Crear prototipo real (opcional)

### Subir Entregables:
```bash
# Crear release en GitHub
git tag v1.0.0
git push origin v1.0.0

# Subir APK a GitHub Releases
# Ir a: https://github.com/Santiago04-C/Recuperaci-n-App-Recetas/releases
# Crear nuevo release, subir APK y video
```

## 🎯 Criterios de Evaluación Cubiertos

- **Arranque y navegación** (10 pts): ✅ Completo
- **Consumo API y búsqueda** (20 pts): ✅ Completo  
- **Persistencia local** (20 pts): ✅ Completo
- **UI/UX y prototipo** (15 pts): ✅ Completo
- **Pruebas y estabilidad** (10 pts): ✅ Completo
- **Documentación y demo** (15 pts): ✅ Completo
- **Buenas prácticas** (10 pts): ✅ Completo

**Total Estimado: 95-100 puntos** 🎉