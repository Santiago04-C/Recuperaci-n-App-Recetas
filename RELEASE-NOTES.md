# 🚀 Release v1.0.0 - App de Recetas Completa

## 📱 Descarga
- **APK Android**: [app-release.apk](https://github.com/Santiago04-C/Recuperaci-n-App-Recetas/releases/download/v1.0.0/app-release.apk)
- **Código fuente**: [Source code (zip)](https://github.com/Santiago04-C/Recuperaci-n-App-Recetas/archive/refs/tags/v1.0.0.zip)

## ✨ Características Principales

### 🔍 **Búsqueda de Recetas**
- Integración con API de Spoonacular
- Búsqueda por nombre o ingredientes
- Listado con paginación
- Manejo de errores y fallback offline

### 📖 **Detalles de Receta**
- Información completa (ingredientes, pasos, tiempo)
- Imágenes de alta calidad
- Botones para favoritos y planificador
- UI responsive con Material Design

### ❤️ **Sistema de Favoritos**
- Agregar/quitar recetas favoritas
- Persistencia local con AsyncStorage
- Funciona completamente offline
- Lista dedicada de favoritos

### 📅 **Planificador Semanal**
- Organizar comidas por días de la semana
- Asignar múltiples recetas por día
- Persistencia local del plan
- Vista de grid intuitiva

### 🧭 **Navegación Fluida**
- Bottom Tabs para pantallas principales
- Stack Navigator para detalles
- Transiciones suaves
- Iconos Material Design

## 🛠️ Tecnologías Utilizadas

- **React Native CLI 0.72.7** - Framework principal
- **TypeScript 4.8.4** - Tipado estático
- **React Navigation** - Sistema de navegación
- **React Native Paper** - Componentes UI Material Design
- **AsyncStorage** - Persistencia local
- **Axios** - Cliente HTTP para APIs
- **Jest** - Framework de testing

## 📋 Requisitos del Sistema

### Android
- **Versión mínima**: Android 6.0 (API 23)
- **Versión objetivo**: Android 13 (API 33)
- **Arquitectura**: ARM64, ARMv7
- **Espacio**: ~50 MB

### Desarrollo
- **Node.js**: ≥ 18.0.0
- **Java JDK**: 17 o superior
- **Android SDK**: API 33
- **React Native CLI**: Instalado globalmente

## 🚀 Instalación

### Para Usuarios (APK)
1. Descargar `app-release.apk`
2. Habilitar "Fuentes desconocidas" en Android
3. Instalar APK
4. Abrir app y disfrutar

### Para Desarrolladores
```bash
# Clonar repositorio
git clone https://github.com/Santiago04-C/Recuperaci-n-App-Recetas.git
cd Recuperaci-n-App-Recetas

# Instalar dependencias
npm install

# Configurar API key (opcional)
cp .env.example .env
# Editar .env con tu clave de Spoonacular

# Ejecutar en Android
npm run android
```

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm test

# Tests incluidos:
✓ App renders correctly
✓ API service functions
✓ FavoritesContext management
✓ Navigation components
```

## 📸 Capturas de Pantalla

| Pantalla | Descripción |
|----------|-------------|
| ![Home](./evidencias/screenshots/home-screen.png) | Búsqueda y listado |
| ![Detail](./evidencias/screenshots/recipe-detail.png) | Detalles de receta |
| ![Favorites](./evidencias/screenshots/favorites.png) | Lista de favoritos |
| ![Planner](./evidencias/screenshots/planner.png) | Planificador semanal |

## 🎥 Video Demo
[▶️ Ver Demo Completo (2-3 min)](https://youtu.be/ENLACE_PENDIENTE)

## 📚 Documentación

- **README**: Instrucciones completas de instalación
- **Documento Técnico**: Arquitectura y patrones implementados
- **Guía Figma**: Prototipo y diseño UI/UX
- **Instrucciones APK**: Cómo generar builds de release

## 🐛 Problemas Conocidos

- La API de Spoonacular tiene límite de 1000 requests/día en plan gratuito
- Algunas imágenes pueden tardar en cargar con conexión lenta
- El planificador no incluye notificaciones (funcionalidad futura)

## 🔄 Próximas Versiones

### v1.1.0 (Planeada)
- [ ] Autenticación de usuarios
- [ ] Sincronización en la nube
- [ ] Notificaciones push
- [ ] Modo oscuro
- [ ] Filtros avanzados de búsqueda

### v1.2.0 (Futura)
- [ ] Lista de compras automática
- [ ] Calculadora nutricional
- [ ] Compartir recetas
- [ ] Valoraciones y comentarios

## 👨‍💻 Desarrollador

**Santiago04-C**  
Estudiante de Técnico en Desarrollo de Software  
Proyecto de Recuperación de Módulo - Diciembre 2024

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

---

**¿Encontraste un bug?** [Reportar issue](https://github.com/Santiago04-C/Recuperaci-n-App-Recetas/issues)  
**¿Tienes una sugerencia?** [Crear feature request](https://github.com/Santiago04-C/Recuperaci-n-App-Recetas/issues/new)