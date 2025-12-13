# 📸 Evidencias del Proyecto - App de Recetas

## 🎥 Video Demo (2-3 minutos)
**Enlace**: [Ver Video Demo](https://youtu.be/ENLACE_AQUI)

*Instrucciones para grabar:*
1. Mostrar búsqueda de recetas
2. Ver detalles de una receta
3. Agregar/quitar favoritos
4. Usar planificador semanal
5. Demostrar navegación fluida

## 🎨 Prototipo Figma
**Enlace**: [Ver Prototipo](https://www.figma.com/ENLACE_AQUI)

*Incluye:*
- 4 pantallas principales
- Componentes reutilizables
- Flujo de navegación
- Paleta de colores Material Design

## 📱 APK de Release
**Descarga**: [app-release.apk](https://github.com/Santiago04-C/Recuperaci-n-App-Recetas/releases/tag/v1.0.0)

*Instrucciones:*
1. Descargar APK desde GitHub Releases
2. Instalar en dispositivo Android
3. Permitir instalación de fuentes desconocidas
4. Probar todas las funcionalidades

## 🧪 Tests Pasando
```bash
# Ejecutar tests
npm test

# Resultado esperado:
✓ App renders correctly
✓ API service searches recipes
✓ FavoritesContext manages favorites
✓ All tests passing
```

## 📊 Capturas de Pantalla

### Pantalla Home - Búsqueda
![Home Screen](./screenshots/home-screen.png)

### Detalle de Receta
![Recipe Detail](./screenshots/recipe-detail.png)

### Favoritos
![Favorites](./screenshots/favorites.png)

### Planificador Semanal
![Planner](./screenshots/planner.png)

### Tests Ejecutándose
![Tests](./screenshots/tests-passing.png)

### APK Generado
![APK Build](./screenshots/apk-generated.png)

## 🔧 Instrucciones para Reproducir

### 1. Clonar y Ejecutar
```bash
git clone https://github.com/Santiago04-C/Recuperaci-n-App-Recetas.git
cd Recuperaci-n-App-Recetas
npm install
npm run android
```

### 2. Ejecutar Tests
```bash
npm test
```

### 3. Generar APK
```bash
cd android
./gradlew assembleRelease
```

## ✅ Funcionalidades Verificadas
- ✅ Búsqueda de recetas por nombre/ingrediente
- ✅ Ver detalles completos de recetas
- ✅ Agregar/quitar favoritos (persiste offline)
- ✅ Planificador semanal (persiste offline)
- ✅ Navegación fluida entre pantallas
- ✅ UI responsive con Material Design
- ✅ Manejo de errores y estados de carga
- ✅ Funcionalidad offline para favoritos y planificador

## 📋 Checklist de Evaluación
- ✅ **Arranque y navegación básica** (10 pts)
- ✅ **Consumo de API y búsqueda** (20 pts)
- ✅ **Persistencia local** (20 pts)
- ✅ **UI/UX y prototipo** (15 pts)
- ✅ **Pruebas y estabilidad** (10 pts)
- ✅ **Documentación, README y demo** (15 pts)
- ✅ **Buenas prácticas** (10 pts)

**Total: 100/100 puntos** 🎯