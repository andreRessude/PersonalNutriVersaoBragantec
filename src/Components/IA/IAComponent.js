// AIComponent.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import * as tmImage from '@teachablemachine/image';

const IAComponent = ({ imageToPredict }) => {
  const [prediction, setPrediction] = useState([]);
  const [model, setModel] = useState(null);

  const loadModel = async () => {
    const modelURL = './my_model/model.json';
    const metadataURL = './my_model/metadata.json';

    const loadedModel = await tmImage.load(modelURL, metadataURL);
    setModel(loadedModel);
  };

  const predictImage = async (imagePath) => {
    if (model) {
      const prediction = await model.predict(imagePath);
      setPrediction(prediction);

      console.log('Previsões:', prediction);
    }
  };

  // Chama loadModel quando o componente é montado
  useEffect(() => {
    loadModel();
  }, []);

  // Chama predictImage quando a imagem a ser prevista muda (imageToPredict)
  useEffect(() => {
    if (imageToPredict) {
      predictImage(imageToPredict);
    }
  }, [imageToPredict]);

  return (
    <View style={{backgroundColor:"blue"}}>
      <Image source={{ uri: imageToPredict }} />
      <Text>Predictions: </Text>
      {prediction.map((item, index) => (
        <Text key={index}>
          {item.className}: {item.probability.toFixed(2)}
        </Text>
      ))}
    </View>
  );
};

export default IAComponent;

/* 

 ## Código original ##

 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Classification</title>
</head>
<body>
    <div>Teachable Machine Image Model</div>
    <input type="file" accept="image/*" onchange="loadImage(event)">
    <div id="label-container"></div>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js"></script>

    <script type="text/javascript">
        const URL = "./my_model/";
        let model, labelContainer, maxPredictions;

        async function loadImage(event) {
            const file = event.target.files[0];
            if (file) {
                const image = new Image();
                image.src = window.URL.createObjectURL(file);
                image.onload = async () => {
                    // Obtenha a referência para o elemento com id "label-container"
                    labelContainer = document.getElementById("label-container");
        
                    const prediction = await predict(image);
                    displayPredictions(prediction);
                };
            }
        }
        

        async function predict(image) {
            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";

            model = await tmImage.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();

            const prediction = await model.predict(image);
            return prediction;
        }

        function displayPredictions(prediction) {
            labelContainer.innerHTML = '';
            for (let i = 0; i < maxPredictions; i++) {
                const classPrediction =
                    prediction[i].className + ": " + prediction[i].probability.toFixed(2);
                labelContainer.appendChild(document.createElement("div")).textContent = classPrediction;
            }
        }
    </script>
</body>
</html>

 */
