export const CheckValidData = (email, Password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      Password
    );
  //   const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);

  //   if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return " Email is not valid.";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
