document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password");
    const copyButton = document.getElementById("copy");
    const generateButton = document.getElementById("generate");
    const passwordLengthInput = document.getElementById("passwordLength");
    const lengthLabel = document.getElementById("length");
    const includeNumbersCheckbox = document.getElementById("includeNumbers");
    const includeSymbolsCheckbox = document.getElementById("includeSymbols");
    const includeLowercaseLettersCheckbox = document.getElementById(
      "includeLowercaseLetters"
    );
    const includeUppercaseLettersCheckbox = document.getElementById(
      "includeUppercaseLetters"
    );
    const passwordStrength = document.getElementById("passwordStrength");
    const copyMessage = document.querySelector(".copy-message");
  
    generateButton.addEventListener("click", generatePassword);
    copyButton.addEventListener("click", function () {
      if (passwordField.value === "") {
        copyMessage.classList.add("empty");
        copyMessage.textContent = "Nothing to copy";
        copyMessage.style.display = "block";
        setTimeout(function () {
          copyMessage.style.display = "none";
          copyMessage.classList.remove("empty");
        }, 2000);
      } else {
        copyToClipboard();
      }
    });
    passwordLengthInput.addEventListener("input", updatePasswordLength);
  
    updatePasswordLength();
  
    function updatePasswordLength() {
      lengthLabel.textContent = passwordLengthInput.value;
    }
  
    function generatePassword() {
      const passwordLength = parseInt(passwordLengthInput.value);
      const includeNumbers = includeNumbersCheckbox.checked;
      const includeSymbols = includeSymbolsCheckbox.checked;
      const includeLowercaseLetters = includeLowercaseLettersCheckbox.checked;
      const includeUppercaseLetters = includeUppercaseLettersCheckbox.checked;
  
      const password = generatePasswordString(
        passwordLength,
        includeNumbers,
        includeSymbols,
        includeLowercaseLetters,
        includeUppercaseLetters
      );
      passwordField.value = password;
  
      const strength = getPasswordStrength(password);
      passwordStrength.textContent = strength.value;
      passwordStrength.className = `password-strength ${getPasswordStrengthClass(
        strength
      )}`;
    }
  
    function generatePasswordString(
      length,
      includeNumbers,
      includeSymbols,
      includeLowercaseLetters,
      includeUppercaseLetters
    ) {
      const charset = [];
      if (includeNumbers) charset.push("0123456789");
      if (includeSymbols) charset.push("!@#$%^&*()_-=}{[]|:;\"/?.><,`~'");
      if (includeLowercaseLetters) charset.push("abcdefghijklmnopqrstuvwxyz");
      if (includeUppercaseLetters) charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  
      const charsetString = charset.join("");
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetString.length);
        password += charsetString.charAt(randomIndex);
      }
      return password;
    }
  
    function getPasswordStrength(password) {
      // Implement your password strength logic here
      // You can use the password variable to check the password strength
      // Return an object with a value (e.g., "Weak", "Strong") and an optional CSS class for styling
      // Example: { value: "Strong", class: "strong-password" }
      // You can define your own criteria for password strength
      // For simplicity, we'll use a basic example here:
  
      const length = password.length;
      if (length < 8) {
        return { value: "Weak", class: "weak-password" };
      } else if (length < 12) {
        return { value: "Medium", class: "medium-password" };
      } else {
        return { value: "Strong", class: "strong-password" };
      }
    }
  
    function getPasswordStrengthClass(strength) {
      return strength.class || "";
    }
  
    function copyToClipboard() {
      passwordField.select();
      document.execCommand("copy");
    }
  });
  