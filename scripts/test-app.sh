#!/bin/bash

# Script para probar la aplicación de recetas
# Uso: ./scripts/test-app.sh

echo "🍳 Probando App de Recetas - Recuperación Módulo"
echo "================================================"

# Verificar que estamos en la raíz del proyecto
if [ ! -f "package.json" ]; then
    echo "❌ Error: Ejecuta este script desde la raíz del proyecto"
    exit 1
fi

# Verificar archivo .env
if [ ! -f ".env" ]; then
    echo "⚠️  Archivo .env no encontrado. Copiando desde .env.example..."
    cp .env.example .env
    echo "✅ Archivo .env creado. Edítalo con tu API key de Spoonacular."
    echo "   Obtén tu clave gratuita en: https://spoonacular.com/food-api"
    echo ""
fi

# Verificar API key
if grep -q "tu_api_key_aqui" .env; then
    echo "⚠️  Recuerda configurar tu SPOONACULAR_API_KEY en el archivo .env"
    echo "   La app funcionará con datos mock sin la clave real."
    echo ""
fi

# Instalar dependencias si es necesario
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Ejecutar tests
echo "🧪 Ejecutando tests..."
npm test -- --watchAll=false

# Verificar que Metro no esté corriendo
if pgrep -f "metro" > /dev/null; then
    echo "⚠️  Metro ya está ejecutándose. Deteniéndolo..."
    pkill -f "metro"
    sleep 2
fi

# Iniciar Metro en background
echo "🚀 Iniciando Metro bundler..."
npm start &
METRO_PID=$!

# Esperar a que Metro esté listo
echo "⏳ Esperando a que Metro esté listo..."
sleep 10

# Verificar dispositivos/emuladores disponibles
echo "📱 Verificando dispositivos disponibles..."
adb devices

# Preguntar si ejecutar en Android
read -p "¿Ejecutar en Android? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🤖 Ejecutando en Android..."
    npx react-native run-android
fi

# Función de limpieza
cleanup() {
    echo "🧹 Limpiando procesos..."
    kill $METRO_PID 2>/dev/null
    exit 0
}

# Capturar Ctrl+C
trap cleanup INT

echo ""
echo "✅ App iniciada correctamente!"
echo "📋 Funcionalidades a probar:"
echo "   • Búsqueda de recetas (ej: 'pasta', 'chicken')"
echo "   • Ver detalles de receta"
echo "   • Agregar/quitar favoritos"
echo "   • Planificador semanal"
echo "   • Navegación entre pestañas"
echo ""
echo "🎥 Para grabar video demo:"
echo "   • Usa AZ Screen Recorder (Android)"
echo "   • Grabación nativa (iOS)"
echo "   • OBS Studio (emulador)"
echo ""
echo "Presiona Ctrl+C para detener Metro y salir"

# Mantener el script corriendo
wait $METRO_PID