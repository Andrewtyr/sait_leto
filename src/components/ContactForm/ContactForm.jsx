// ContactForm.jsx
import React from 'react';
import './ContactForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faTelegram } from '@fortawesome/free-brands-svg-icons';

function ContactForm() {
  return (
    <div className="contact-form-container">
      {/* Контейнер для текста и иконок */}
      <div className="container contact-info-table">
        <table style={{ width: '100%', textAlign: 'center', marginBottom: '50px' }}>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left' }}>
                <p className="left-align-text">Связаться со мной можно по почте hurohin72@gmail.com<br/>
                Альтерантива связи может быть мой телеграм  </p>
              </td>
              <td>
                <div className="icons" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                  <a href="ссылка_на_вконтакте" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faVk} className="vk-icon" style={{ fontSize: '50px' }} />
                  </a>
                  <a href="ссылка_на_телеграм" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram} className="telegram-icon" style={{ fontSize: '50px' }} />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Контейнер для фото */}
      {/* Контейнер для фото */}
      <div className="container">
        <p style={{ textAlign: 'center' }}>
          <img
            src={process.env.PUBLIC_URL + '/images/контакты.png'}
            alt="Фото"
            className="contact-image"
            style={{ maxWidth: '100%', maxHeight: '300px', height: '400px', borderRadius: '10px' }}
          />
        </p>
      </div>
      </div>

  );
}

export default ContactForm;
