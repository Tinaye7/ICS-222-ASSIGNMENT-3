<script>
    function Enquiries() {
        var name = document.forms["EnquiryForm"]["Name"];
        var email = document.forms["EnquiryForm"]["EMail"];
        var phone = document.forms["EnquiryForm"]["Telephone"];
        var what = document.forms["EnquiryForm"]["Subject"];
        var password = document.forms["EnquiryForm"]["Password"];
        var address = document.forms["EnquiryForm"]["Address"];
  
        if (name.value == "") {
            window.alert("Please enter your name.");
            name.focus();
            return false;
        }
  
        
  
        if (email.value == "") {
            window.alert(
              "Please enter a valid e-mail address.");
            email.focus();
            return false;
        }
  
        if (phone.value == "") {
            window.alert(
              "Please enter your telephone number.");
            phone.focus();
            return false;
        }
  
       
  
        
  
        return true;
    }
</script>