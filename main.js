import "./style.css";
import { validateForm } from "./ValidateForm.js";
import { verifyCode } from "./VerifyCode";
import { redirectToLogin } from "./Login.js";

document.addEventListener('DOMContentLoaded', function () {
  const appContainer = document.querySelector("#app");
  const verifyCodeButton = document.querySelector("#verifyCodeButton");
  const loginAndPostButton = document.querySelector('#loginAndPostButton');

  if (verifyCodeButton) {
      verifyCodeButton.addEventListener("click", verifyCode);
  }

  if (loginAndPostButton) {
      loginAndPostButton.addEventListener('click', redirectToLogin);
  }

appContainer.innerHTML = `

  <form id="myForm">

  <h2>Personal Details</h2>
    <label>I am:</label>
    <p>
    <input type="radio" name="role" value="owner"> Owner
    <input type="radio" name="role" value="agent"> Agent
    <input type="radio" name="role" value="builder"> Builder
    </p>

    <p></p>
    <label>Name</label>
    <input type="text" id="name" name="name" required>
    <span id="nameError" class="error"></span>

    <label>Mobile </label>
    <input type="text" id="mobile" name="mobile">
    <span id="mobileError" class="error"></span>

    <input type="submit" value="Submit">

    <h2>Property Details</h2>

    <!-- Sale/Rent Radio Button -->
    <label>Sale/Rent:</label>
    <label><input type="radio" name="saleRent" value="sale" checked> Sale</label>
    <label><input type="radio" name="saleRent" value="rent"> Rent</label>

    <!-- Property Type  -->
    <label>Property Type:</label>
    <select name="propertyType" id="propertyType" required onchange="toggleAdditionalFields()">
      <option value="" disabled selected>Select Property Type</option>
      <option value="house">House</option>
      <option value="apartment">Apartment</option>
      <option value="condo">Condo</option>
      <option value="land">Land</option>
    </select>

    <!-- Additional Fields for Land -->
    <div class="additionalFields" id="landFields">
      <!-- Plot Area  -->
      <label>Plot Area:</label>
      <select name="plotArea">
        <option value="100">100 sq. meters</option>
        <option value="200">200 sq. meters</option>
        <option value="300">300 sq. meters</option>
        <option value="400">400 sq. meters</option>
      </select>

    </div>


    <h2>Property Location</h2>
    <!-- City Input -->
    <label>City:</label>
    <input type="text" name="city">

    <!-- Location Input -->
    <label>Location:</label>
    <input type="text" name="location">

    <!-- Property Title Input -->
    <label>Property Title:</label>
    <input type="text" name="propertyTitle" required>

    <!-- Property Description Input -->
    <label>Property Description:</label>
    <textarea name="propertyDescription" rows="4"></textarea>

    <h2>Property Features</h2>

    <!-- Corner Lot Dropdown -->
    <label>Corner Lot:</label>
    <select name="cornerLot">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>

    <!-- Garden Fencing Dropdown -->
    <label>Garden Fencing:</label>
    <select name="gardenFencing">
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>

    <!-- Plot Number Input -->
    <label>Plot Number:</label>
    <input type="text" name="plotNumber">

    <input type="submit" value="Submit">

    <!-- Year Built Input -->
    <label>Year Built:</label>
    <input type="text" name="yearBuilt">

    <input type="submit" value="Submit">

    <h2>Price Details</h2>

    <!-- Expected Price Input -->
    <label>Expected Price:</label>
    <input type="text" name="expectedPrice" placeholder="Enter price">

    <!-- Price Postfix Input -->
    <label>Price Postfix:</label>
    <input type="text" name="pricePostfix" placeholder="e.g., lacs, thousand">

    <h2>Photos</h2>

    <!-- Drag and Drop Input for Photos -->
    <label>Drag and Drop Photos:</label>
    <input type="file" name="photos" accept="image/*" multiple>

    <!-- Button for Adding Photos -->
    <button type="button">Add Photos</button>

    <h2>Attach Property Map/Files</h2>

    <!-- Input for Property Map/Files -->
    <label>Attach Property Map/Files:</label>
    <input type="file" name="propertyFiles">

    <h2>Select Property Features</h2>

    <!-- Checkboxes for Property Features -->
    <label><input type="checkbox" name="feature1"> Feature 1</label>
    <label><input type="checkbox" name="feature2"> Feature 2</label>
    <label><input type="checkbox" name="feature3"> Feature 3</label>

    <h2>Login and Post Property</h2>

    <!-- Redirect to Login Button -->
    <button type="button" id="loginAndPostButton">Login and Post Property</button>

    <h2>OTP Verification</h2>

    <!-- OTP Input -->
    <!-- OTP Input -->
    <div class="otp-container">
      <input type="text" class="otp-input" maxlength="1" id="otp1">
      <input type="text" class="otp-input" maxlength="1" id="otp2">
      <input type="text" class="otp-input" maxlength="1" id="otp3">
      <span>-</span>
      <button type="button" id="verifyCodeButton">Verify Code</button>
    </div>



    <!-- Verify Code Button -->
    <button type="button" id="verifyCodeButton">Verify Code</button>
  </form>
`;

const myForm = document.querySelector("#myForm");

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {
            console.log("Form is valid. Submitting...");
        } else {
            console.log("Form validation failed. Please check the errors.");
        }
    });
// Attach radio button change event listener
const roleRadios = document.querySelectorAll('input[name="role"]');
    roleRadios.forEach(radio =>
        radio.addEventListener("change", toggleAdditionalFields)
    );

    function toggleAdditionalFields() {
        var propertyType = document.getElementById("propertyType").value;
        var landFields = document.getElementById("landFields");

        // Show additional fields for Land
        if (propertyType === "land") {
            landFields.style.display = "block";
        } else {
            landFields.style.display = "none";
        }
    }
});
