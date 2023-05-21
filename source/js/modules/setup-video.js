const video = document.querySelector('.about-company__video');

const setupVideo = () => {
  let link = video.querySelector('.about-company__video-link');
  let button = video.querySelector('.about-company__video-button');

  const createIframe = () => {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw');

    iframe.classList.add('about-company__iframe');

    return iframe;
  };

  video.addEventListener('click', () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
    video.classList.add('about-company__video-mobile');
  });

  link.setAttribute('href', '#');
};

export {setupVideo};
