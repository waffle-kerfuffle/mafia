export const validate = (data, type) => {

    const errors = {};

    if (!data.email) {
        errors.email = "ایمیل الزامی است"
    } 

    if (!data.password) {
        errors.password = "رمز عبور الزامی است"
    } else if (data.password.length < 2) {
        errors.password = "رمز عبور باید حداقل 6 کاراکتر باشد"
    } else {
        delete errors.password
    }

    if (type === "signup") {

        if (!data.name.trim()) {
            errors.name = "نام و نام خانوادگی الزامی است"
        } else {
            delete errors.name
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "رمز عبور را مجددا وارد نمایید"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "رمز عبور وارد شده با قبلی مطابقت ندارد"
        } else {
            delete errors.confirmPassword
        }

        if (data.isAccepted) {
            delete errors.isAccepted
        } else {
            errors.isAccepted = "لطفا قوانین را بپذیرید"
        }
    }

    return errors;
}