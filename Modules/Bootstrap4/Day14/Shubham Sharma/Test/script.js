
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
</head>
<body>

<h3>Contact Form</h3>

<div class="container">
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>

</body>
</html>

<form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar">
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
<table>
        <tr>
            <td>
                Name:
            </td>
            <td>
            <input type="text" list="mydatalist">
                <datalist id="mydatalist">
                    <option label="Mr." value="Mr."></option>
                    <option label="Mrs." value="Mrs."></option>
                    <option label="Miss." value="Miss."></option>
                </datalist>
            </td>
            
        </tr>
        <tr>
            <td>
                age;
            </td>
            <td>
                <input type="number" placeholder="number" name="">
            </td>
        </tr>
        <tr>
            <td>
                Gender;
            </td>
            <td>
                <input type="radio" name="Gender">Male >
                <input type="radio" name="Gender">FeMale >
            </td>
        </tr>
<td>
age:
</td>
<td>
<input type="number" placeholder="Number" name="">
</td>
</tr>
<tr>
<td>
Gender:
</td>
<td>
<input type="radio" name="Gender">Male
<input type="radio" name="Gender">FeMale
</td>
</tr>
<tr>
<td>
Desigination:
</td>
<td>
<input type="text" placeholder="Desigination" name="">
</td>
</tr>
<tr>
<td>
Salary:
</td>
<td>
<input type="number" placeholder="Salary" name="">
</td>
</tr>
<tr>
<td>
Location:
</td>
<td>
<input type="text" placeholder="Location" name="">
</td>
</tr>
<tr>
<td>
Email id:
</td>
<td>
<input type="email" placeholder="example(abc.ek@yms.com)" name="">
</td>
</tr>
<tr>
<td>
Date of joining:
</td>
<td>
<label>Date:</label>
<input type="date" placeholder="dd/mm/yy"
</td>
</tr>
<tr>
<td>
Department:
</td>
<td>
<input type="text" placeholder="Department" name="">
</td>
</tr>
<tr>
<td>
contact number:
</td>
<td>
<select>
    <option>+91</option>
    <option>+36</option>
    <option>+22</option>
    <option>+22</option>
    <option>+55</option>
    <option>+22</option>
    <option>+89</option>
    <option>+63</option>
</select>
<input type="number" placeholder="98568****" name="">
<tr>
    <td>
        <input type="Submit" value="Submit" name="">
    </td>
</tr>
</td>
</tr>
</table>
<label for="meter-Data">Meter:</label>
</form>

</div>
