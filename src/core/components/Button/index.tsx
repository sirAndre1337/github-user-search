import './styles.css';

type Props = {
    title: string;
}

const Button = ({ title }: Props) => (
    <button className='btn'>
        {title}
    </button>
);

export default Button;