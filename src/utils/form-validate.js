export const usernameValidate = {
  required: {
    value: true,
    message: "กรุณาใส่ชื่อของคุณ",
  },
};

export const surnameValidate = {
  required: {
    value: true,
    message: "กรุณาใส่นามสกุลของคุณ",
  },
};

export const ageValidate = {
  required: {
    value: true,
    message: "ระบุอายุของคุณ",
  },
};

export const genderValidate = {
  required: {
    value: true,
    message: "ระบุเพศของคุณ",
  },
};

export const emailValidate = {
  required: {
    value: true,
    message: "กรุณาใส่อีเมล์ของคุณ",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "อีเมล์ไม่ถูกต้อง",
  },
};

export const passwordValidate = {
  required: {
    value: true,
    message: "กรุณาใส่รหัสผ่านของคุณ",
  },
  minLength: {
    value: 6,
    message: "รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร",
  },
};
