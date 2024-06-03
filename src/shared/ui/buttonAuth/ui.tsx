import './index.css'

interface buttonProps {
  className?: string,
  text?: string,
 }

export const Button: React.FC<buttonProps> = ({
  className,
  text,
}) => {
  return (
    <button type="button" className={className}>
      {text}
    </button>
  )
}