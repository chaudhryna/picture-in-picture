const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Prompt to select media src
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disable = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});

// On load
selectMediaStream();
