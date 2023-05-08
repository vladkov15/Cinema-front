import { useForm } from 'react-hook-form';
import styles from './CardInput.module.scss';

interface CardInputProps {
  label: string;
}

interface CardData {
  cardNumber: string;
  cardHolderName: string;
  cvv: string;
}

const CardInput: React.FC<CardInputProps> = ({ label }) => {
  const {
    register,
    formState: { errors },
  } = useForm<CardData>();

  return (
    <div className={styles['card-input-container']}>
      <div className={styles['card-input']}>
        <div className={styles['card-number']}>
          <input
            type="text"
            {...register('cardNumber', { required: true, pattern: /^[0-9]{16}$/ })}
            placeholder="XXXX XXXX XXXX XXXX"
          />
          {errors.cardNumber && (
            <div className={styles.error}>Please enter a valid card number</div>
          )}
        </div>
        <div className={styles['card-container']}>
          <div className={styles['card-holder']}>
            <input
              type="text"
              {...register('cardHolderName', { required: true })}
              placeholder="Cardholder Name"
            />
            {errors.cardHolderName && (
              <div className={styles.error}>Please enter the cardholder name</div>
            )}
          </div>
          <div className={styles['cvv']}>
            <input
              type="text"
              {...register('cvv', { required: true, pattern: /^[0-9]{3}$/ })}
              placeholder="CVV"
            />
            {errors.cvv && <div className={styles.error}>Please enter a valid CVV</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInput;
