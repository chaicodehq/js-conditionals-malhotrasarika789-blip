/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if(typeof password !== 'string' || password.length===0 ) return "weak"
  let passwordCriteria = 0;
  
  if(password.length >= 8) passwordCriteria++;

  let hasCapitalLetter = false;
  let hasSmallLetter = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  for (let i = 0; i<password.length; i++){
    let char = password[i]
    if( !hasCapitalLetter && (char >= 'A' && char <= 'Z'))
    {
      hasCapitalLetter = true
    }else if(!hasSmallLetter && (char >= 'a' && char <= 'z'))
    {
      hasSmallLetter = true
    }else if(!hasNumber && (char >= '0' && char <= '9'))
    {
      hasNumber = true
    }else if(!hasSpecialChar && "!@#$^&*()_+-=[]{}|;:,.<>?".includes(char)){
      hasSpecialChar = true
    }
  }
  if(hasCapitalLetter) passwordCriteria++;
  if(hasNumber) passwordCriteria++;
  if(hasSmallLetter) passwordCriteria++;
  if(hasSpecialChar) passwordCriteria++;
  if(passwordCriteria <= 1){
    return 'weak'
  }else if(passwordCriteria <= 3){
    return 'medium'
  }else if(passwordCriteria===4){
    return 'strong'
  }else if(passwordCriteria>=5){
    return 'very strong'
}
}
