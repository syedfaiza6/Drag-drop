function onDragStart(event) {
  event.dataTransfer.setData('text', event.target.id);
  event.currentTarget.style.backgroundColor = 'yellow';
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
  alert("drop successful");
}

function resetContainers() {
  const originContainer = document.querySelector('.example-origin');
  const dropzone = document.querySelector('.example-dropzone');
  
  const originalItems = [
    '<div id="draggable-1" class="example-draggable" draggable="true" ondragstart="onDragStart(event);">thing 1</div>',
    '<div id="draggable-2" class="example-draggable" draggable="true" ondragstart="onDragStart(event);">thing 2</div>',
    '<div id="draggable-3" class="example-draggable" draggable="true" ondragstart="onDragStart(event);">thing 3</div>',
    '<div id="draggable-4" class="example-draggable" draggable="true" ondragstart="onDragStart(event);">thing 4</div>'
  ];
  
  originContainer.innerHTML = originalItems.join('');
  dropzone.innerHTML = 'Done';
  }