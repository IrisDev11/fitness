const video = document.querySelector('.about-company__video');

const setupVideo = () => {
  let imageContainer = video.querySelector('.about-company__video-image');
  let button = video.querySelector('.about-company__video-button');

  const createIframe = () => {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw');

    iframe.classList.add('about-company__iframe');

    return iframe;
  };

  button.addEventListener('click', () => {
    let iframe = createIframe();

    imageContainer.remove();
    button.remove();
    video.appendChild(iframe);
    video.classList.add('about-company__video-mobile');
  });
};

export {setupVideo};
