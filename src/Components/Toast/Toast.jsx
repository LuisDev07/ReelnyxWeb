import { useEffect } from 'react';

const Toast = ({ message, show, onClose, duration = 3000 }) => {

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div style={styles.toast}>
      {message}
    </div>
  );
};

const styles = {
  toast: {
    position: 'fixed',
    textAlign: 'center', 
    fontSize: '10px',
    top: '10px',
    right: '10px',
    background: '#BB2748',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    zIndex: 9999
  }
};

export default Toast;