# Weather App / Application Météo

## 🇬🇧 English Version

The Weather App is built using **JavaScript** and **React** to create a clean and modern user interface. It fetches real-time weather data through an external weather API.

## 🚀 Features

* Displays current weather information based on the city entered by the user.
* Uses API calls to retrieve data such as temperature, humidity, wind speed, etc.
* UI built with React for a smooth and responsive experience.

## 🛠️ Technologies Used

* **ReactJS**: UI development
* **JavaScript**: Logic and API handling
* **Weather API**: Real-time weather data

## 📦 Installation

```bash
git clone https://github.com/tsonw/Weather-App.git
cd weather-app
npm install
npm start
o + [enter]
```

## 🌐 API Call Example

```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => setWeather(data));
```

---

## 🇫🇷 Version Française

L'application Weather App est développée avec **JavaScript** et **React**, offrant une interface moderne et fluide. Elle récupère les données météo en temps réel via une API météo externe.

## 🚀 Fonctionnalités

* Affiche les informations météo actuelles selon la ville saisie par l'utilisateur.
* Utilise des appels API pour obtenir la température, l'humidité, la vitesse du vent, etc.
* Interface construite avec React pour une expérience utilisateur optimisée.

## 🛠️ Technologies Utilisées

* **ReactJS** : Développement de l'interface utilisateur
* **JavaScript** : Logique et gestion des appels API
* **Weather API** : Données météo en temps réel

## 📦 Installation

```bash
git clone https://github.com/tsonw/Weather-App.git
cd weather-app
npm install
npm start
o + [enter]
```

## 🌐 Exemple d'Appel API

```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => setWeather(data));
```

## 👤 Auteur

Développé par HOANG Thai Son (tsonw)