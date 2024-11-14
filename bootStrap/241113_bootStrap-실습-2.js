**JS
// JavaScript for handling feedback submission

document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
    const userMessageInput = document.getElementById('userMessage');
    const messageTable = document.getElementById('messageTable').querySelector('tbody');
  
    submitBtn.addEventListener('click', function () {
      // Get selected character
      const selectedOption = document.querySelector('input[name="inlineRadioOptions"]:checked');
      const userMessage = userMessageInput.value.trim();
  
      // Validate input
      if (!selectedOption) {
        alert('분야를 선택해주세요.');
        return;
      }
      if (!userMessage) {
        alert('의견을 입력해주세요.');
        return;
      }
  
      // Create new table row
      const newRow = document.createElement('tr');
      newRow.classList.add('text-center');
  
      // Create character cell
      const characterCell = document.createElement('td');
      characterCell.textContent = selectedOption.value;
      newRow.appendChild(characterCell);
  
      // Create message cell
      const messageCell = document.createElement('td');
      messageCell.textContent = userMessage;
      newRow.appendChild(messageCell);
  
      // Append new row to the table
      messageTable.appendChild(newRow);
  
      // Clear input fields
      userMessageInput.value = '';
      selectedOption.checked = false;
    });
  });