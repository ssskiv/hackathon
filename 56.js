// Загрузка файла
fetch('file.txt')
  .then(response => response.text())
  .then(data => {
    // Изменение содержимого файла
    const updatedData = data.replace(/oldText/g, 'newText');

    // Загрузка файла на сервер
    fetch('save-file.php', {
      method: 'POST',
      body: updatedData
    })
    .then(response => {
      console.log('Файл успешно сохранен на сервере');
    })
    .catch(error => {
      console.error('Ошибка при сохранении файла:', error);
    });
  })
  .catch(error => {
    console.error('Ошибка при загрузке файла:', error);
  });
