import { toast } from "react-toastify";

class ToastHelper {
    static displayErrorMessage(errorMessage) {
        toast.error(errorMessage);
    }

    static displaySuccessMessage(successMessage) {
        toast.success(successMessage);
    }

    static displayWarning(warning) {
        toast.warn(warning);
    }

    static displayInfo(info) {
        toast.info(info);
    }
}

export default ToastHelper;