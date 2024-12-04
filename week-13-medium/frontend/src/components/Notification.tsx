// src/utils/toastNotifications.js
import { toast } from 'react-toastify'

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    position: window.innerWidth > 768 ? 'top-right' : 'top-center',
    autoClose: 3000, // Automatically close after 3 seconds
    closeOnClick: true, // Allow manual close by clicking
    pauseOnHover: true, // Pause auto-close timer on hover
    // Allow to drag and close the notification
  })
}

export const showErrorToast = (message: string) => {
  toast.error(message, {
    position: window.innerWidth > 768 ? 'top-right' : 'top-center',
    autoClose: 3000, // Automatically close after 3 seconds
    closeOnClick: true, // Allow manual close by clicking
    pauseOnHover: true, // Pause auto-close timer on hover
    // Allow to drag and close the notification
  })
}
export const promiseToast = (
  promise: Promise<any>,
  pendingMessage: string,
  successMessage: string,
  errorMessage: string
): void => {
  toast.promise(promise, {
    pending: pendingMessage,
    success: successMessage,
    error: errorMessage,
  })
}
