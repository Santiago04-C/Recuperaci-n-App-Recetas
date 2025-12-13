# Prototipo Figma - App de Recetas y Planificador

## Enlace al Prototipo
**Figma Prototype**: [Ver Prototipo](https://www.figma.com/proto/recipe-planner-app)

*Nota: Este es un enlace de ejemplo. Para crear el prototipo real, sigue las instrucciones a continuación.*

## Cómo Crear el Prototipo en Figma

### 1. Estructura de Pantallas
Crea 4 frames principales (375x812px - iPhone 13):

#### HomeScreen
- **Header**: "Recetas" + icono de búsqueda
- **SearchBar**: Input con placeholder "Buscar recetas..."
- **RecipeGrid**: Grid 2x3 con cards de recetas
- **BottomTabs**: Home (activo), Favoritos, Planificador

#### RecipeDetailScreen
- **Header**: Título de receta + botón back + corazón favorito
- **Image**: Imagen grande de la receta (375x200px)
- **Info Section**: Tiempo, porciones, dificultad
- **Ingredients**: Lista con bullets
- **Instructions**: Pasos numerados
- **Action Button**: "Agregar al Planificador"

#### FavoritesScreen
- **Header**: "Mis Favoritos"
- **RecipeList**: Lista vertical de recetas favoritas
- **Empty State**: "No tienes favoritos aún" (si está vacío)
- **BottomTabs**: Home, Favoritos (activo), Planificador

#### PlannerScreen
- **Header**: "Planificador Semanal"
- **WeekGrid**: 7 días en grid vertical
- **DayCard**: Cada día con recetas asignadas
- **Add Button**: "+" para agregar receta al día
- **BottomTabs**: Home, Favoritos, Planificador (activo)

### 2. Componentes Reutilizables

#### RecipeCard
- **Dimensions**: 160x200px
- **Image**: 160x120px con border-radius 8px
- **Title**: Texto bold, 14px, máximo 2 líneas
- **Time**: Icono reloj + tiempo en minutos
- **Heart Icon**: Para favoritos (outline/filled)

#### SearchBar
- **Dimensions**: 343x48px
- **Background**: #F5F5F5 con border-radius 24px
- **Icon**: Lupa a la izquierda
- **Placeholder**: "Buscar por ingrediente o nombre..."

#### DayPlanner
- **Dimensions**: 343x100px
- **Day Label**: "Lunes", "Martes", etc.
- **Recipe Slots**: Hasta 3 recetas pequeñas
- **Add Button**: "+" si hay espacio

### 3. Paleta de Colores
```
Primary: #6200EE (Material Purple)
Primary Variant: #3700B3
Secondary: #03DAC6
Background: #FFFFFF
Surface: #F5F5F5
Error: #B00020
Text Primary: #000000
Text Secondary: #666666
```

### 4. Tipografía
```
Headers: Roboto Bold 20px
Subtitles: Roboto Medium 16px
Body: Roboto Regular 14px
Captions: Roboto Regular 12px
```

### 5. Flujo de Navegación
1. **Home** → Tap receta → **RecipeDetail**
2. **RecipeDetail** → Tap corazón → Agregar a favoritos
3. **RecipeDetail** → Tap "Agregar al Planificador" → **PlannerScreen**
4. **BottomTabs** → Navegación entre pantallas principales

### 6. Estados Interactivos
- **Loading**: Skeleton screens para carga de datos
- **Empty States**: Mensajes cuando no hay contenido
- **Error States**: Mensajes de error con retry
- **Success**: Confirmaciones de acciones (favoritos, planificador)

## Instrucciones para Implementar

1. **Crear cuenta en Figma** (gratuita)
2. **Nuevo proyecto**: "App Recetas - Recuperación"
3. **Importar iconos**: Material Icons o Feather Icons
4. **Crear componentes**: RecipeCard, SearchBar, DayPlanner
5. **Diseñar pantallas** siguiendo la estructura anterior
6. **Conectar flujos** con prototipado de Figma
7. **Compartir enlace** público para revisión

## Recursos Útiles
- **Material Design**: https://material.io/design
- **React Native Paper**: https://reactnativepaper.com/
- **Iconos**: https://materialdesignicons.com/
- **Imágenes**: https://unsplash.com/s/photos/food

## Tiempo Estimado
- **Diseño**: 2-3 horas
- **Prototipado**: 1 hora
- **Refinamiento**: 30 minutos

**Total**: ~4 horas para prototipo completo y funcional