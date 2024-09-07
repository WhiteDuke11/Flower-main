onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    music.play().catch(function(error) {
        console.log('Автозапуск блокирован. Музыка начнет играть при клике.');
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const music = document.getElementById('background-music');
  const loadingScreen = document.getElementById('loading-screen');

  if (music) {
      document.body.addEventListener('click', function() {
          if (loadingScreen) {
              loadingScreen.style.display = 'none'; // Скрываем экран загрузки
          }
          music.play();
      });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const music = document.getElementById('background-music');
  const loadingScreen = document.getElementById('loading-screen');
  const startButton = document.getElementById('start-button');

  if (startButton) {
      startButton.addEventListener('click', function() {
          if (loadingScreen) {
              loadingScreen.style.display = 'none'; // Скрываем экран загрузки
          }
          if (music) {
              music.play();
          }
      });
  }
});


document.body.addEventListener('click', function() {
    const music = document.getElementById('background-music');
    music.play();
});

document.addEventListener('DOMContentLoaded', function() {
  const music = document.getElementById('background-music');
  if (music) {
      document.body.addEventListener('click', function() {
          music.play();
      });
  } else {
      console.log('Элемент с id "background-music" не найден.');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const music = document.getElementById('background-music');
  if (music) {
      music.addEventListener('canplaythrough', function() {
          music.play();
      });
  }
});


// Пример кода для адаптивного поведения
function adjustLayout() {
    if (window.innerWidth <= 768) {
        // Мобильная версия
        document.querySelector('.header').style.fontSize = '20px';
    } else {
        // Десктопная версия
        document.querySelector('.header').style.fontSize = '30px';
    }
}

// Вызов функции при загрузке страницы и изменении размера окна
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);
