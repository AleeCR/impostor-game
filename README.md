# 🎭 Impostor App

**Impostor App** es una implementación del clásico juego "Blanco o Impostor" desarrollada con tecnologías web (HTML, CSS y JavaScript) y empaquetada para Android usando **Capacitor**. Descubre quién es el impostor en tu grupo de amigos con esta divertida aplicación móvil.

## 🎮 Cómo jugar

### Dinámica del juego

**Impostor App** se juega con **un único dispositivo móvil** que se pasa entre todos los participantes. Es perfecto para grupos de amigos, familia o cualquier reunión social.

#### 📱 Configuración inicial:
1. **Selecciona el número de jugadores** (recomendado: 3-10 participantes)
2. La app asignará automáticamente:
   - Una **palabra común** a la mayoría de jugadores.
   - La **palabra "impostor"** a uno de los jugadores (el "impostor")

#### 🔄 Mecánica de juego:
1. **Paso del dispositivo**: Cada jugador toma el móvil en su turno
2. **Visualización secreta**: Ve únicamente su palabra asignada (sin que otros la vean)
3. **Pase seguro**: Entrega el dispositivo al siguiente jugador
4. **Repetir**: Continúa hasta que todos hayan visto su palabra

#### 🕵️ Fase de deducción:
- Los jugadores **describen su palabra** sin decirla directamente
- El **"grupo"** intentan identificar quién es el impostor
- El **"impostor"** tratan de pasar desapercibidos y descubrir la palabra común

#### 🏆 Victoria:
- **El grupo gana**: Si identifican correctamente al impostor
- **Impostor gana**: Si consigue pasar desapercibido

### ✨ Características del juego

- Interfaz intuitiva y atractiva
- Un solo dispositivo para todos los jugadores
- Diseño responsivo optimizado para dispositivos móviles  
- Animaciones y efectos visuales fluidos
- Perfecto para fiestas y reuniones sociales

## 📂 Estructura del proyecto

```
impostor-app/
├── android/                    # Proyecto Android generado por Capacitor
├── www/                       # Código fuente del juego (HTML, CSS, JS)
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
├── resources/                 # Recursos de la app (iconos, splash screens)
│   └── icon.png
├── capacitor.config.json      # Configuración de Capacitor
├── package.json              # Dependencias y scripts del proyecto
├── README.md                 # Documentación del proyecto
└── app-release.apk           # APK lista para distribución
```

## 🖼️ Recursos visuales

- **Icono principal**: Ubicado en `resources/icon.png`
- **Generación automática**: Capacitor genera automáticamente todos los tamaños de iconos y splash screens necesarios para Android
- **Diseño optimizado**: Iconos adaptados para diferentes densidades de pantalla

## 🛠️ Desarrollo y ejecución

### Prerrequisitos

- **Node.js** ≥ 16.0.0
- **npm** o **yarn**
- **Android Studio** (para desarrollo Android)
- **Capacitor CLI**

### Instalación y configuración

1. **Clona el repositorio e instala las dependencias:**
   ```bash
   git clone <url-del-repositorio>
   cd impostor-app
   npm install
   ```

2. **Instala Capacitor CLI globalmente (si no lo tienes):**
   ```bash
   npm install -g @capacitor/cli
   ```

3. **Sincroniza los archivos web con el proyecto Android:**
   ```bash
   npx cap copy android
   ```

4. **Abre el proyecto en Android Studio:**
   ```bash
   npx cap open android
   ```

5. **Compila y ejecuta** la app en un emulador o dispositivo físico desde Android Studio.

### Desarrollo web

Para probar el juego en el navegador durante el desarrollo:

```bash
# Inicia un servidor local
npx cap serve
```

## 📱 Instalación de la APK

### Opción 1: APK precompilada
1. Descarga el archivo `app-release.apk` incluido en este repositorio
2. En tu dispositivo Android, habilita la instalación desde "Fuentes desconocidas":
   - Ve a **Configuración** > **Seguridad** > **Fuentes desconocidas**
3. Transfiere la APK a tu dispositivo y tócala para instalar
4. ¡Disfruta del juego!

### Opción 2: Compilación propia
```bash
# Genera una nueva APK
cd android
./gradlew assembleRelease
```

## 🔧 Scripts útiles

```bash
# Sincronizar cambios web con Android
npx cap copy android

# Actualizar plugins de Capacitor
npx cap update android

# Limpiar y reconstruir
npx cap clean android
npx cap copy android

# Ejecutar en dispositivo (requiere ADB configurado)
npx cap run android
```

## 📋 Requisitos del sistema

### Para desarrollo:
- **Sistema operativo**: Windows 10+, macOS 10.14+, o Linux
- **Node.js**: Versión 16 o superior
- **Android Studio**: Versión más reciente
- **JDK**: Versión 11 o superior

### Para instalación (usuarios finales):
- **Android**: Versión 7.0 (API nivel 24) o superior
- **Espacio libre**: ~10 MB

## 🚀 Próximas mejoras

- [ ] Modo multijugador en línea
- [ ] Personalización de avatares
- [ ] Sistema de puntuaciones
- [ ] Efectos de sonido
- [ ] Traducción a múltiples idiomas

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Confirma tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Sube la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias, por favor abre un [issue](https://github.com/tu-usuario/impostor-app/issues) en GitHub.

---

**¡Diviértete descubriendo quién es el impostor! 🕵️‍♂️**
