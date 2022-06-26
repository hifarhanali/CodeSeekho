
interface AlertProps {
    message: string,
    type: 'success' | 'error' | 'warning' | 'info'
}
const Alert: React.FC<AlertProps> = ({ message, type }) => {
    return (
        <div 
            className={`p-2 w-full rounded-md ${type === "success" ? "bg-primary-button " : type === "error" ? "bg-red-500" : ""} text-primary-background font-bold text-center`}
        >
            {message}
        </div>
    )
}
export default Alert