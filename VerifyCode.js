export function verifyCode() {
  var otp1 = document.getElementById("otp1").value;
  var otp2 = document.getElementById("otp2").value;
  var otp3 = document.getElementById("otp3").value;
  var verificationCode = otp1 + otp2 + otp3;

 
  if (verificationCode === "123") {
    alert("Code verified successfully!");
  } else {
    alert("Incorrect verification code. Please try again.");
  }
}
