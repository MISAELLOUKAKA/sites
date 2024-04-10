document.addEventListener('DOMContentLoaded', function() {
  const decreaseButtons = document.querySelectorAll('.decrease');
  const increaseButtons = document.querySelectorAll('.increase');
  const removeButtons = document.querySelectorAll('.remove');
  const likeButtons = document.querySelectorAll('.like');
  const quantityInputs = document.querySelectorAll('.quantity input');
  const totalPriceElement = document.querySelector('.total-price');

  // Update total price
  function updateTotalPrice() {
      let totalPrice = 0;
      document.querySelectorAll('.product').forEach(product => {
          const price = parseFloat(product.querySelector('.price').textContent.replace('fcfa', ''));
          const quantity = parseInt(product.querySelector('.quantity input').value);
          totalPrice += price * quantity;
      });
      totalPriceElement.textContent = 'fcfa' + totalPrice.toFixed(2);
  }

  // Add event listeners for decrease buttons
  decreaseButtons.forEach(button => {
      button.addEventListener('click', function() {
          const input = this.nextElementSibling;
          let value = parseInt(input.value);
          if (value > 1) {
              value--;
              input.value = value;
              updateTotalPrice();
          }
      });
  });

  // Add event listeners for increase buttons
  increaseButtons.forEach(button => {
      button.addEventListener('click', function() {
          const input = this.previousElementSibling;
          let value = parseInt(input.value);
          value++;
          input.value = value;
          updateTotalPrice();
      });
  });

  // Add event listeners for remove buttons
  removeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const product = this.parentElement.parentElement;
          product.remove();
          updateTotalPrice();
      });
  });

  // Add event listeners for like buttons
  likeButtons.forEach(button => {
      button.addEventListener('click', function() {
          this.classList.toggle('liked');
      });
  });

  // Add event listeners for quantity inputs
  quantityInputs.forEach(input => {
      input.addEventListener('change', updateTotalPrice);
  });

  // Initial calculation of total price
  updateTotalPrice();
});

